import { BaseAgent } from './baseAgent.ts';
import { LanguageModel, TaskNote } from '@/types';
import { queryModel } from '@/service/inference';

export class ProfessorAgent extends BaseAgent {
  constructor(
    model: LanguageModel,
    notes: TaskNote[] = [],
    maxSteps: number = 100,
  ) {
    super(model, notes, maxSteps);
    this.phases = ['report writing'];
  }

  /**
   * Generates a README.md based on the written paper (this.report),
   * history, and additional instructions.
   */
  async generateReadme(): Promise<string> {
    const systemPrompt = `You are ${this.roleDescription()} \nHere is the written paper \n${this.report}. Task instructions: Your goal is to integrate all of the knowledge, code, reports, and notes provided to you and generate a readme.md for a GitHub repository.`;
    const historyStr = this.history.map(([, text]) => text).join('\n');
    const prompt = `History: ${historyStr}\n${'~'.repeat(10)}\nPlease produce the readme below in markdown:\n`;
    const modelResp = await queryModel({
      languageModel: this.model,
      prompt,
      systemPrompt,
    });
    return modelResp.replace('```markdown', '');
  }

  /**
   * Provides context for a given phase. For the ProfessorAgent,
   * this implementation returns an empty string.
   * @param _phase The phase for which to provide context.
   * @returns The context string.
   */
  context(_phase: string): string {
    // let srStr = '';
    // if (this.secondRound) {
    //   srStr =
    //     'The following are results from the previous experiments\n' +
    //     `Previous Experiment code: ${this.prevResultsCode}\n` +
    //     `Previous Results: ${this.prevExpResults}\n` +
    //     `Previous Interpretation of results: ${this.prevInterpretation}\n` +
    //     `Previous Report: ${this.report}\n` +
    //     `${this.reviewerResponse}\n\n\n`;
    // }
    // if (phase === 'report writing') {
    //   return (
    //     srStr +
    //     `Current Literature Review: ${this.litReviewSum}\n` +
    //     `Current Plan: ${this.plan}\n` +
    //     `Current Dataset code: ${this.datasetCode}\n` +
    //     `Current Experiment code: ${this.resultsCode}\n` +
    //     `Current Results: ${this.expResults}\n` +
    //     `Current Interpretation of results: ${this.interpretation}\n`
    //   );
    // }
    return '';
  }

  /**
   * Returns an example command for the given phase.
   * Throws an error if the phase is not included in this.phases.
   * @param phase The phase for which to return an example command.
   * @returns The example command.
   */
  exampleCommand(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return (
      'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
      "where 'dialogue here' is the actual dialogue you will send and DIALOGUE is just the word DIALOGUE.\n" +
      'When performing a command, make sure to include the three ticks (```) at the top and bottom ' +
      '```COMMAND\n<Insert command here>\n```\n' +
      'where COMMAND is the specific command you want to run (e.g. REPORT, DIALOGUE).\n'
    );
  }

  /**
   * Returns the command descriptions for the given phase.
   * Throws an error if the phase is not included in this.phases.
   * @param phase The phase for which to return command descriptions.
   * @returns The command descriptions.
   */
  commandDescriptions(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return (
      'When you believe a good report has been arrived at between you and the PhD student, ' +
      'you can use the following command to end the dialogue and submit the plan ' +
      '```LATEX\nreport here\n```\n' +
      "where 'report here' is the actual report written in compilable LaTeX to be transmitted " +
      'and LATEX is just the word LATEX.\n' +
      'Your report should include numbers, relevant metrics to the experiment (e.g. accuracy or loss) ' +
      'and measures of significance. You must propagate this information accurately. ' +
      'You must also submit the report promptly. Do not delay too long.\n' +
      'You must be incredibly detailed about what you did for the experiment and all of the findings.\n'
    );
  }

  /**
   * Returns the phase prompt for the given phase.
   * Throws an error if the phase is not included in this.phases.
   * @param phase The phase for which to return the prompt.
   * @returns The phase prompt.
   */
  phasePrompt(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return (
      'You are directing a PhD student to help them write a report in LaTeX based on results from an experiment, ' +
      'and you interact with them through dialogue.\n' +
      'Your goal is to write a report in LaTeX for an experiment. You should read through the code, read through the interpretation, ' +
      'and look at the results to understand what occurred. ' +
      'You should then discuss with the PhD student how they can write up the results and give their feedback to improve their thoughts.\n'
    );
  }

  /**
   * Returns a string describing the professor's role.
   */
  roleDescription(): string {
    // TODO: Make this more dynamic.
    return 'a computer science professor at a top university.';
  }
}
