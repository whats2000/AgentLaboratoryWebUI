import { LanguageModel } from '@/types';
import { BaseAgent } from './baseAgent';
import { queryModel } from '@/service/inference';

interface LiteratureReviewEntry {
  arxiv_id: string;
  full_text: string;
  summary: string;
}

export class PhDStudentAgent extends BaseAgent {
  lit_review: LiteratureReviewEntry[];

  constructor(model: LanguageModel, notes: any[] = [], maxSteps: number = 100) {
    super(model, notes, maxSteps);
    this.phases = [
      'literature review',
      'plan formulation',
      'running experiments',
      'results interpretation',
      'report writing',
      'report refinement',
    ];
    this.lit_review = [];
  }

  /**
   * Returns context information for a given phase.
   * Depending on the phase, it concatenates previous experiment details (if any)
   * and current status details.
   * For PhDStudentAgent, the context is based on the phase.
   * For example, in the 'plan formulation' phase, the context includes the literature review summary and the plan.
   * @param phase The phase for which context is requested.
   * @returns Context information for the given phase.
   */
  context(phase: string): string {
    let srStr = '';
    if (this.secondRound) {
      srStr =
        'The following are results from the previous experiments\n' +
        'Previous Experiment code: ' +
        this.prevResultsCode +
        '\n' +
        'Previous Results: ' +
        this.prevExpResults +
        '\n' +
        'Previous Interpretation of results: ' +
        this.prevInterpretation +
        '\n' +
        'Previous Report: ' +
        this.prevReport +
        '\n' +
        this.reviewerResponse +
        '\n\n\n';
    }

    if (phase === 'plan formulation') {
      return srStr + 'Current Literature Review: ' + this.litReviewSum;
    } else if (phase === 'data preparation') {
      // Although "data preparation" is not listed in the phases, it is handled here.
      return (
        srStr +
        'Current Literature Review: ' +
        this.litReviewSum +
        '\n' +
        'Current Plan: ' +
        this.plan
      );
    } else if (phase === 'results interpretation') {
      return (
        srStr +
        'Current Literature Review: ' +
        this.litReviewSum +
        '\n' +
        'Current Plan: ' +
        this.plan +
        '\n' +
        'Current Dataset code: ' +
        this.datasetCode +
        '\n' +
        'Current Experiment code: ' +
        this.resultsCode +
        '\n' +
        'Current Results: ' +
        this.expResults
      );
    } else if (phase === 'report refinement') {
      return (
        srStr +
        'Current Literature Review: ' +
        this.litReviewSum +
        '\n' +
        'Current Plan: ' +
        this.plan +
        '\n' +
        'Current Dataset code: ' +
        this.datasetCode +
        '\n' +
        'Current Experiment code: ' +
        this.resultsCode +
        '\n' +
        'Current Results: ' +
        this.expResults +
        '\n' +
        'Current Interpretation of results: ' +
        this.interpretation
      );
    } else if (phase === 'literature review') {
      return srStr;
    } else {
      return '';
    }
  }

  /**
   * Asynchronously generates a requirements.txt in markdown format by calling the LLM.
   * The requirements.txt is generated based on the history of the agent.
   * @returns A promise that resolves to the generated requirements.txt.
   */
  async requirementsTxt(): Promise<string> {
    const systemPrompt = `You are ${this.roleDescription()} \nTask instructions: Your goal is to integrate all of the knowledge, code, reports, and notes provided to you and generate a requirements.txt for a GitHub repository for all of the code.`;
    const historyStr = this.history.map(([, text]) => text).join('\n');
    const prompt = `History: ${historyStr}\n${'~'.repeat(10)}\nPlease produce the requirements.txt below in markdown:\n`;
    return await queryModel({
      languageModel: this.model,
      prompt,
      systemPrompt,
    });
  }

  /**
   * Returns an example command for the specified phase.
   * For PhDStudentAgent, no example command is provided.
   * @param phase The phase for which an example command is requested.
   * @returns An example command for the specified phase.
   */
  exampleCommand(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return '';
  }

  /**
   * Returns command descriptions for a given phase.
   * For PhDStudentAgent, the command descriptions are based on the phase.
   * For example, in the 'literature review' phase, the command descriptions include the SUMMARY, FULL_TEXT, and ADD_PAPER commands.
   * @param phase The phase for which command descriptions are requested.
   * @returns Command descriptions for the given phase.
   */
  commandDescriptions(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    if (phase === 'literature review') {
      return (
        'To collect paper summaries, use the following command: ```SUMMARY\nSEARCH QUERY\n```\n' +
        'where SEARCH QUERY is a string that will be used to find papers with semantically similar content and SUMMARY is just the word SUMMARY. Make sure your search queries are very short.\n' +
        'To get the full paper text for an arXiv paper, use the following command: ```FULL_TEXT\narXiv paper ID\n```\n' +
        'where arXiv paper ID is the ID of the arXiv paper (which can be found by using the SUMMARY command), and FULL_TEXT is just the word FULL_TEXT. Make sure to read the full text using the FULL_TEXT command before adding it to your list of relevant papers.\n' +
        'If you believe a paper is relevant to the research project proposal, you can add it to the official review after reading using the following command: ```ADD_PAPER\narXiv_paper_ID\nPAPER_SUMMARY\n```\n' +
        'where arXiv_paper_ID is the ID of the arXiv paper, PAPER_SUMMARY is a brief summary of the paper, and ADD_PAPER is just the word ADD_PAPER. You can only add one paper at a time.\n' +
        'Make sure to use ADD_PAPER when you see a relevant paper. DO NOT use SUMMARY too many times. ' +
        'You can only use a single command per inference turn. Do not use more than one command per inference. ' +
        'If you use multiple commands, then only one of them will be executed, not both.\n' +
        'Make sure to extensively discuss the experimental results in your summary.\n' +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. ADD_PAPER, FULL_TEXT, SUMMARY). Do not use the word COMMAND; ' +
        'make sure to use the actual command, e.g. your command should look exactly like this: ```ADD_PAPER\ntext\n```\n'
      );
    } else if (phase === 'plan formulation') {
      return (
        'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
        "where 'dialogue here' is the actual dialogue you will send and DIALOGUE is just the word DIALOGUE.\n" +
        'You can only use a single command per inference turn. Do not use more than one command per inference. ' +
        'If you use multiple commands, then only one of them will be executed, not both.\n' +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. DIALOGUE).\n'
      );
    } else if (phase === 'data preparation') {
      return (
        'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
        "where 'dialogue here' is the actual dialogue you will send and DIALOGUE is just the word DIALOGUE.\n" +
        'When you and the ML engineer have finalized your dataset preparation code and are ready to submit the final code, please use the following command: ```SUBMIT_CODE\ncode here\n```\n' +
        "where 'code here' is the finalized code you will send and SUBMIT_CODE is just the word SUBMIT_CODE. " +
        'Do not use any classes or functions. The submitted code must have a HuggingFace dataset import and must use an external HuggingFace dataset. ' +
        'If your code returns any errors, they will be provided to you, and you are also able to see print statements. ' +
        'Make sure function variables are created inside the function or passed as a function parameter. DO NOT CREATE A MAIN FUNCTION.\n' +
        'Make sure to submit code in a reasonable amount of time. Do not make the code too complex, try to make it simple. ' +
        'Do not take too long to submit code. Submit the code early. You should submit the code ASAP.\n' +
        'You can only use a single command per inference turn. Do not use more than one command per inference. ' +
        'If you use multiple commands, then only one of them will be executed, not both.\n' +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. SUBMIT_CODE, DIALOGUE).\n'
      );
    } else if (phase === 'results interpretation') {
      return (
        'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
        "where 'dialogue here' is the actual dialogue you will send and DIALOGUE is just the word DIALOGUE.\n" +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. DIALOGUE).\n'
      );
    } else if (phase === 'report refinement') {
      return '';
    }
    return '';
  }

  /**
   * Returns the phase prompt for a given phase.
   * For PhDStudentAgent, the phase prompt is based on the phase.
   * For example, in the 'literature review' phase, the phase prompt includes instructions for performing a literature review.
   * @param phase The phase for which the prompt is requested.
   * @returns The phase prompt for the given phase.
   */
  phasePrompt(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }

    if (phase === 'literature review') {
      let phaseStr =
        'Your goal is to perform a literature review for the presented task and add papers to the literature review.\n' +
        'You have access to arXiv and can perform two search operations: (1) finding many different paper summaries from a search query and (2) getting a single full paper text for an arXiv paper.\n';
      const revPapers =
        'Papers in your review so far: ' +
        this.lit_review.map((paper) => paper.arxiv_id).join(' ');
      phaseStr += this.lit_review.length > 0 ? revPapers : '';
      return phaseStr;
    } else if (phase === 'plan formulation') {
      return (
        'You are a PhD student being directed by a postdoc who will help you come up with a good plan, and you interact with them through dialogue.\n' +
        'Your goal is to produce plans that would make good experiments for the given topic. You should aim for a very simple experiment that showcases your plan, not a complex one. ' +
        'You should integrate the provided literature review and come up with plans on how to expand and build on these works for the given topic. ' +
        'Your plans should provide a clear outline for how to achieve the task, including what machine learning models to use and implement, ' +
        'what types of datasets should be searched for and used to train the model, and the exact details of the experiment.\n'
      );
    } else if (phase === 'results interpretation') {
      return (
        'You are a PhD student being directed by a postdoc who will help you come up with an interpretation for results from an experiment, and you interact with them through dialogue.\n' +
        'Your goal is to interpret results from experiments that were previously run. You should read through the code and look at the results to understand what occurred. ' +
        'You should then discuss with the postdoc your interpretation and use their feedback to improve your thoughts. ' +
        'You should integrate the provided literature review, code, and plans to come up with an exciting interpretation that could make a compelling paper. ' +
        'Your plans should provide a clear outline that can be used to write an academic paper.\n' +
        'Your interpretation should include numbers, relevant metrics to the experiment (e.g. accuracy or loss) and measures of significance. ' +
        'You must propagate this information accurately. ' +
        'You must submit the interpretation during this phase in a reasonable amount of time. Do not delay the submission.'
      );
    } else if (phase === 'report refinement') {
      return (
        'You are a PhD student who has submitted their paper to an ML conference called ICLR. ' +
        'Your goal was to write a research paper and get high scores from the reviewers so that it gets accepted to the conference.\n'
      );
    } else {
      return '';
    }
  }

  /**
   * Returns the role description for the PhD student.
   * @returns The role description for the PhD student.
   */
  roleDescription(): string {
    return 'a computer science PhD student at a top university.';
  }

  /**
   * Adds a paper review to the literature review list.
   * Expects the review string to be two lines:
   *   - First line: arXiv paper ID
   *   - Second line: a brief review summary
   * @param review The review string to be added to the literature review list.
   * @param arxEng The arXivEngine object to retrieve the full paper text.
   * @returns A tuple containing a success message and the full text of the paper.
   */
  addReview(review: string, arxEng: any): [string, string] {
    try {
      const [arxivId, reviewText] = review.trim().split('\n', 2);
      const fullText = arxEng.retrieveFullPaperText(arxivId);
      const reviewEntry: LiteratureReviewEntry = {
        arxiv_id: arxivId,
        full_text: fullText,
        summary: reviewText,
      };
      this.lit_review.push(reviewEntry);
      return [`Successfully added paper ${arxivId}`, fullText];
    } catch (e: any) {
      return [
        `Error trying to add review -- bad formatting, try again: ${e.message}`,
        '',
      ];
    }
  }

  /**
   * Formats the literature review for display.
   */
  formatReview(): string {
    return (
      'Provided here is a literature review on this topic:\n' +
      this.lit_review
        .map((l) => `arXiv ID: ${l.arxiv_id}, Summary: ${l.summary}`)
        .join('\n')
    );
  }
}
