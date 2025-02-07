import { LanguageModel } from '@/types';
import { BaseAgent } from './baseAgent';

export class MLEngineerAgent extends BaseAgent {
  constructor(model: LanguageModel, notes: any[] = [], maxSteps: number = 100) {
    super(model, notes, maxSteps);
    this.phases = ['data preparation', 'running experiments'];
  }

  /**
   * Builds and returns the context string for a given phase.
   * For "data preparation", it concatenates previous experiment details (if any)
   * with current literature review and plan details.
   * For "running experiments", an empty string is returned.
   * @param phase The phase for which to provide context.
   * @returns The context string.
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
    // The "running experiments" branch is commented out in the original Python code.
    return '';
  }

  /**
   * Returns an example command for the given phase.
   * For MLEngineerAgent, no example command is provided, so an empty string is returned.
   * @param phase The phase for which to return an example command.
   * @returns The example command.
   */
  exampleCommand(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return '';
  }

  /**
   * Returns command descriptions based on the phase.
   * For the "data preparation" phase, a detailed multi‑line instruction string is returned.
   * For other phases, an empty string is returned.
   * @param phase The phase for which to return command descriptions.
   * @returns The command descriptions.
   */
  commandDescriptions(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    if (phase === 'data preparation') {
      return (
        'You can produce code using the following command: ```python\ncode here\n```\n' +
        "where 'code here' is the actual code you will execute in a Python terminal, and python is just the word python. " +
        'Try to incorporate some print functions. Do not use any classes or functions. If your code returns any errors, ' +
        'they will be provided to you, and you are also able to see print statements. You will receive all print statement results from the code. ' +
        'Make sure function variables are created inside the function or passed as a function parameter.\n' +
        'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
        "where 'dialogue here' is the actual dialogue you will send, and DIALOGUE is just the word DIALOGUE.\n" +
        'You also have access to HuggingFace datasets. You can search the datasets repository using the following command: ' +
        '```SEARCH_HF\nsearch query here\n```\n' +
        "where 'search query here' is the query used to search HuggingFace datasets, and SEARCH_HF is the word SEARCH_HF. " +
        'This will return a list of HuggingFace dataset descriptions which can be loaded into Python using the datasets library. ' +
        'Your code MUST use an external HuggingFace directory.\n' +
        'You MUST use a HuggingFace dataset in your code. DO NOT CREATE A MAIN FUNCTION. Try to make the code very simple.\n' +
        'You can only use a SINGLE command per inference turn. Do not use more than one command per inference. ' +
        'If you use multiple commands, then only one of them will be executed, NOT BOTH.\n' +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. python, DIALOGUE, SEARCH_HF).\n'
      );
    }
    return '';
  }

  /**
   * Returns the phase prompt for the given phase.
   * For "data preparation", it explains the task context for a machine learning engineer.
   * For other phases, an empty string is returned.
   * @param phase The phase for which to return the prompt.
   * @returns The phase prompt.
   */
  phasePrompt(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    if (phase === 'data preparation') {
      return (
        'You are a machine learning engineer being directed by a PhD student who will help you write the code, ' +
        'and you can interact with them through dialogue.\n' +
        'Your goal is to produce code that prepares the data for the provided experiment. ' +
        'You should aim for simple code to prepare the data, not complex code. ' +
        'You should integrate the provided literature review and the plan and come up with code to prepare data for this experiment.\n'
      );
    }
    return '';
  }

  /**
   * Returns a string describing the role of the agent.
   * For MLEngineerAgent, the role is described as a machine learning engineer working at a top university.
   * @returns The role description.
   */
  roleDescription(): string {
    return 'a machine learning engineer working at a top university.';
  }
}
