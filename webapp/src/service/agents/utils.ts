import { LanguageModel } from '@/types';
import { queryModel } from '@/service/inference';

/**
 * Extracts JSON from a string that is delimited by ```json ... ``` blocks.
 * (A dummy implementation; adjust as needed.)
 * @param llmOutput The string to extract JSON from.
 * @returns The extracted JSON object, or null if no JSON was found.
 */
export function extractJsonBetweenMarkers(llmOutput: string): any | null {
  const jsonPattern = /```json([\s\S]*?)```/g;
  let matches = Array.from(llmOutput.matchAll(jsonPattern)).map((match) =>
    match[1].trim(),
  );

  if (matches.length === 0) {
    // Fallback: try to match any JSON-like object
    const fallbackPattern = /(\{.*?})/g;
    matches = Array.from(llmOutput.matchAll(fallbackPattern)).map(
      (match) => match[1],
    );
  }

  for (const jsonString of matches) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      try {
        // Remove control characters and try again
        const jsonStringClean = jsonString.replace(/[\x00-\x1F\x7F]/g, '');
        return JSON.parse(jsonStringClean);
      } catch (error2) {
        console.error('Failed to parse JSON:', error2);
      }
    }
  }
  return null;
}

/**
 * Calls the LLM reward model to compute a performance score.
 * Returns a tuple of [performance, message, success].
 * @param outlinedPlan The research plan in outline form.
 * @param latex The research paper in LaTeX format.
 * @param rewardModelLLM The reward model LLM.
 * @param reviewerType The type of reviewer to simulate.
 * @param attempts The number of attempts to make.
 */
export async function getScore(
  outlinedPlan: string,
  latex: string,
  rewardModelLLM: LanguageModel,
  reviewerType: string = '',
  attempts: number = 3,
): Promise<[number, string, boolean]> {
  let lastError = '';
  for (let i = 0; i < attempts; i++) {
    try {
      const templateInstructions = `
      Respond in the following format:

      THOUGHT:
      <THOUGHT>

      REVIEW JSON:
      \`\`\`json
      <JSON>
      \`\`\`

      In <THOUGHT>, first briefly discuss your intuitions and reasoning for the evaluation.
      Detail your high-level arguments, necessary choices and desired outcomes of the review.
      Do not make generic comments here, but be specific to your current paper.
      Treat this as the note-taking phase of your review.

      In <JSON>, provide the review in JSON format with the following fields in the order:
      - "Summary": A summary of the paper content and its contributions.
      - "Strengths": A list of strengths of the paper.
      - "Weaknesses": A list of weaknesses of the paper.
      - "Originality": A rating from 1 to 4 (low, medium, high, very high).
      - "Quality": A rating from 1 to 4 (low, medium, high, very high).
      - "Clarity": A rating from 1 to 4 (low, medium, high, very high).
      - "Significance": A rating from 1 to 4 (low, medium, high, very high).
      - "Questions": A set of clarifying questions to be answered by the paper authors.
      - "Limitations": A set of limitations and potential negative societal impacts of the work.
      - "Ethical Concerns": A boolean value indicating whether there are ethical concerns.
      - "Soundness": A rating from 1 to 4 (poor, fair, good, excellent).
      - "Presentation": A rating from 1 to 4 (poor, fair, good, excellent).
      - "Contribution": A rating from 1 to 4 (poor, fair, good, excellent).
      - "Overall": A rating from 1 to 10 (very strong reject to award quality).
      - "Confidence": A rating from 1 to 5 (low, medium, high, very high, absolute).
      - "Decision": A decision that has to be one of the following: Accept, Reject.

      For the "Decision" field, don't use Weak Accept, Borderline Accept, Borderline Reject, or Strong Reject. Instead, only use Accept or Reject.
      This JSON will be automatically parsed, so ensure the format is precise.
      `;
      const neuripsForm = `
      ## Review Form
      Below is a description of the questions you will be asked on the review form for each paper and some guidelines on what to consider when answering these questions.
      When writing your review, please keep in mind that after decisions have been made, reviews and meta-reviews of accepted papers and opted-in rejected papers will be made public. 

      1. Summary: Briefly summarize the paper and its contributions. This is not the place to critique the paper; the authors should generally agree with a well-written summary.
        - Strengths and Weaknesses: Please provide a thorough assessment of the strengths and weaknesses of the paper, touching on each of the following dimensions:
        - Originality: Are the tasks or methods new? Is the work a novel combination of well-known techniques? (This can be valuable!) Is it clear how this work differs from previous contributions? Is related work adequately cited
        - Quality: Is the submission technically sound? Are claims well supported (e.g., by theoretical analysis or experimental results)? Are the methods used appropriate? Is this a complete piece of work or work in progress? Are the authors careful and honest about evaluating both the strengths and weaknesses of their work
        - Clarity: Is the submission clearly written? Is it well organized? (If not, please make constructive suggestions for improving its clarity.) Does it adequately inform the reader? (Note that a superbly written paper provides enough information for an expert reader to reproduce its results.)
        - Significance: Are the results important? Are others (researchers or practitioners) likely to use the ideas or build on them? Does the submission address a difficult task in a better way than previous work? Does it advance the state of the art in a demonstrable way? Does it provide unique data, unique conclusions about existing data, or a unique theoretical or experimental approach?

      2. Questions: Please list up and carefully describe any questions and suggestions for the authors. Think of the things where a response from the author can change your opinion, clarify a confusion or address a limitation. This can be very important for a productive rebuttal and discussion phase with the authors.  

      3. Limitations: Have the authors adequately addressed the limitations and potential negative societal impact of their work? If not, please include constructive suggestions for improvement.
      In general, authors should be rewarded rather than punished for being up front about the limitations of their work and any potential negative societal impact. You are encouraged to think through whether any critical points are missing and provide these as feedback for the authors.

      4. Ethical concerns: If there are ethical issues with this paper, please flag the paper for an ethics review. For guidance on when this is appropriate, please review the NeurIPS ethics guidelines.

      5. Soundness: Please assign the paper a numerical rating on the following scale to indicate the soundness of the technical claims, experimental and research methodology and on whether the central claims of the paper are adequately supported with evidence.
        4: excellent
        3: good
        2: fair
        1: poor

      6. Presentation: Please assign the paper a numerical rating on the following scale to indicate the quality of the presentation. This should take into account the writing style and clarity, as well as contextualization relative to prior work.
        4: excellent
        3: good
        2: fair
        1: poor

      7. Contribution: Please assign the paper a numerical rating on the following scale to indicate the quality of the overall contribution this paper makes to the research area being studied. Are the questions being asked important? Does the paper bring a significant originality of ideas and/or execution? Are the results valuable to share with the broader NeurIPS community.
        4: excellent
        3: good
        2: fair
        1: poor

      8. Overall: Please provide an "overall score" for this submission. Choices: 
        10: Award quality: Technically flawless paper with groundbreaking impact on one or more areas of AI, with exceptionally strong evaluation, reproducibility, and resources, and no unaddressed ethical considerations.
        9: Very Strong Accept: Technically flawless paper with groundbreaking impact on at least one area of AI and excellent impact on multiple areas of AI, with flawless evaluation, resources, and reproducibility, and no unaddressed ethical considerations.
        8: Strong Accept: Technically strong paper, with novel ideas, excellent impact on at least one area of AI or high-to-excellent impact on multiple areas of AI, with excellent evaluation, resources, and reproducibility, and no unaddressed ethical considerations.
        7: Accept: Technically solid paper, with high impact on at least one sub-area of AI or moderate-to-high impact on more than one area of AI, with good-to-excellent evaluation, resources, reproducibility, and no unaddressed ethical considerations.
        6: Weak Accept: Technically solid, moderate-to-high impact paper, with no major concerns with respect to evaluation, resources, reproducibility, ethical considerations.
        5: Borderline accept: Technically solid paper where reasons to accept outweigh reasons to reject, e.g., limited evaluation. Please use sparingly.
        4: Borderline reject: Technically solid paper where reasons to reject, e.g., limited evaluation, outweigh reasons to accept, e.g., good evaluation. Please use sparingly.
        3: Reject: For instance, a paper with technical flaws, weak evaluation, inadequate reproducibility and incompletely addressed ethical considerations.
        2: Strong Reject: For instance, a paper with major technical flaws, and/or poor evaluation, limited impact, poor reproducibility and mostly unaddressed ethical considerations.
        1: Very Strong Reject: For instance, a paper with trivial results or unaddressed ethical considerations

      9. Confidence:  Please provide a "confidence score" for your assessment of this submission to indicate how confident you are in your evaluation. Choices:
        5: You are absolutely certain about your assessment. You are very familiar with the related work and checked the math/other details carefully.
        4: You are confident in your assessment, but not absolutely certain. It is unlikely, but not impossible, that you did not understand some parts of the submission or that you are unfamiliar with some pieces of related work.
        3: You are fairly confident in your assessment. It is possible that you did not understand some parts of the submission or that you are unfamiliar with some pieces of related work. Math/other details were not carefully checked.
        2: You are willing to defend your assessment, but it is quite likely that you did not understand the central parts of the submission or that you are unfamiliar with some pieces of related work. Math/other details were not carefully checked.
        1: Your assessment is an educated guess. The submission is not in your area or the submission was difficult to understand. Math/other details were not carefully checked.

        You must make sure that all sections are properly created: abstract, introduction, methods, results, and discussion. Points must be reduced from your scores if any of these are missing.
      ${templateInstructions}
      `;
      const systemPrompt = `You are an AI researcher reviewing a paper submitted to a prestigious ML venue. Be critical and cautious. ${reviewerType}\n${neuripsForm}`;
      const userPrompt = `Outlined in the following text is the research plan that the machine learning engineer was tasked with building: ${outlinedPlan}\n\nThe following text is the research latex that the model produced: \n${latex}\n\n`;
      const scoring = await queryModel({
        languageModel: rewardModelLLM,
        prompt: userPrompt,
        systemPrompt,
        timeout: 5.0,
        tries: 5,
        temperature: 0.0,
      });
      const reviewJson = extractJsonBetweenMarkers(scoring);

      if (!reviewJson) {
        throw new Error('No valid JSON found');
      }

      const overall = parseInt(reviewJson['Overall']) / 10;
      const soundness = parseInt(reviewJson['Soundness']) / 4;
      const confidence = parseInt(reviewJson['Confidence']) / 5;
      const contribution = parseInt(reviewJson['Contribution']) / 4;
      const presentation = parseInt(reviewJson['Presentation']) / 4;
      const clarity = parseInt(reviewJson['Clarity']) / 4;
      const originality = parseInt(reviewJson['Originality']) / 4;
      const quality = parseInt(reviewJson['Quality']) / 4;
      const significance = parseInt(reviewJson['Significance']) / 4;

      // Define weights
      const clarityWeight = 0.1,
        qualityWeight = 0.1,
        overallWeight = 1.0,
        soundnessWeight = 0.1,
        confidenceWeight = 0.1,
        originalityWeight = 0.1,
        significanceWeight = 0.1,
        contributionWeight = 0.4,
        presentationWeight = 0.2;
      const maxScore =
        clarityWeight +
        qualityWeight +
        overallWeight +
        soundnessWeight +
        confidenceWeight +
        originalityWeight +
        significanceWeight +
        contributionWeight +
        presentationWeight;

      const performance =
        ((soundnessWeight * soundness +
          presentationWeight * presentation +
          confidenceWeight * confidence +
          contributionWeight * contribution +
          overallWeight * overall +
          originalityWeight * originality +
          significanceWeight * significance +
          clarityWeight * clarity +
          qualityWeight * quality) /
          maxScore) *
        10;
      return [
        performance,
        `The performance of your submission is: ${performance}\n${scoring}`,
        true,
      ];
    } catch (e: any) {
      lastError = e.message;
    }
  }
  return [0, lastError, false];
}
