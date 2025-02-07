import { LanguageModel } from '@/types';
import { BaseAgent } from './baseAgent';

export class SWEngineerAgent extends BaseAgent {
  constructor(model: LanguageModel, notes: any[] = [], maxSteps: number = 100) {
    super(model, notes, maxSteps);
    this.phases = ['data preparation'];
  }

  /**
   * Builds and returns the context string for a given phase.
   * For the "data preparation" phase, it includes previous experiment details (if any)
   * and the current literature review and plan.
   * For other phases, it returns an empty string.
   * @param phase The phase for which to build the context string.
   * @returns The context string for the given phase.
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
    if (phase === 'data preparation') {
      return (
        srStr +
        'Current Literature Review: ' +
        this.litReviewSum +
        '\nPlan: ' +
        this.plan +
        '\n' +
        'Current Plan: ' +
        this.plan
      );
    }
    return '';
  }

  /**
   * Returns an example command for the given phase.
   * For SWEngineerAgent, no example command is provided.
   * @param phase The phase for which to return an example command.
   * @returns An example command for the given phase.
   */
  exampleCommand(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return '';
  }

  /**
   * Returns command descriptions for the given phase.
   * For "data preparation", a detailed multi‑line instruction string is returned.
   * For other phases, an empty string is returned.
   * @param phase The phase for which to return command descriptions.
   * @returns Command descriptions for the given phase.
   */
  commandDescriptions(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    if (phase === 'data preparation') {
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
    }
    return '';
  }

  /**
   * Returns the phase prompt for the given phase.
   * For "data preparation", it explains the task context for a software engineer directing an ML engineer.
   * For other phases, an empty string is returned.
   * @param phase The phase for which to return the prompt.
   * @returns The phase prompt for the given phase.
   */
  phasePrompt(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    if (phase === 'data preparation') {
      return (
        'You are a software engineer directing a machine learning engineer, where the machine learning engineer will be writing the code, ' +
        'and you can interact with them through dialogue.\n' +
        'Your goal is to help the ML engineer produce code that prepares the data for the provided experiment. ' +
        'You should aim for very simple code to prepare the data, not complex code. ' +
        'You should integrate the provided literature review and the plan and come up with code to prepare data for this experiment.\n'
      );
    }
    return '';
  }

  /**
   * Returns a string describing the role of the agent.
   * @returns A string describing the role of the agent.
   */
  roleDescription(): string {
    return 'a software engineer working at a top university.';
  }
}
