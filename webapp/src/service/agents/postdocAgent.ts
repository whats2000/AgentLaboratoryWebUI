import { LanguageModel } from '@/types';
import { BaseAgent } from './baseAgent.ts';

export class PostdocAgent extends BaseAgent {
  constructor(model: LanguageModel, notes: any[] = [], maxSteps: number = 100) {
    super(model, notes, maxSteps);
    this.phases = ['plan formulation', 'results interpretation'];
  }

  /**
   * Provides context for the current phase by concatenating any relevant previous
   * experiment details with current status information.
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

    if (phase === 'plan formulation') {
      return srStr + 'Current Literature Review: ' + this.litReviewSum;
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
    }
    return '';
  }

  /**
   * For the PostdocAgent, no example command is provided.
   * @param phase The phase for which to provide an example command.
   * @returns An empty string.
   */
  exampleCommand(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }
    return '';
  }

  /**
   * Returns the command descriptions for a given phase.
   * @param phase The phase for which to return command descriptions.
   * @returns The command descriptions.
   */
  commandDescriptions(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }

    if (phase === 'plan formulation') {
      return (
        'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
        'where dialogue here is the actual dialogue you will send and DIALOGUE is just the word DIALOGUE.\n' +
        'When you believe a good plan has been arrived at between you and the PhD student, you can use the following command to end the dialogue and submit the plan: ```PLAN\nplan here\n```\n' +
        'where plan here is the actual plan to be transmitted and PLAN is just the word PLAN. ' +
        'Plan here should provide a clear outline for how to achieve the task, including what machine learning models to use and implement, ' +
        'what types of datasets should be searched for and used to train the model, and the exact details of the experiment.\n' +
        'You can only use a SINGLE command per inference turn. Do not use more than one command per inference. ' +
        'If you use multiple commands, then only one of them will be executed, NOT BOTH.\n' +
        'Make sure not to produce too much dialogue and to submit a plan in reasonable time. ' +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom: ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. PLAN, DIALOGUE).\n'
      );
    } else if (phase === 'results interpretation') {
      return (
        'When you believe a good interpretation has been arrived at between you and the PhD student, ' +
        'you can use the following command to end the dialogue and submit the plan: ```INTERPRETATION\ninterpretation here\n```\n' +
        'where interpretation here is the actual interpretation to be transmitted and INTERPRETATION is just the word INTERPRETATION. ' +
        'Please provide an INTERPRETATION in a reasonable amount of time.\n' +
        'You can produce dialogue using the following command: ```DIALOGUE\ndialogue here\n```\n' +
        'where dialogue here is the actual dialogue you will send and DIALOGUE is just the word DIALOGUE.\n' +
        'You must submit the interpretation during this phase in a reasonable amount of time. Do not delay the submission. ' +
        'When performing a command, make sure to include the three ticks (```) at the top and bottom: ' +
        '```COMMAND\ntext\n```\n' +
        'where COMMAND is the specific command you want to run (e.g. INTERPRETATION, DIALOGUE).\n'
      );
    }
    return '';
  }

  /**
   * Returns the phase prompt for a given phase.
   * @param phase The phase for which to return the prompt.
   * @returns The phase prompt.
   */
  phasePrompt(phase: string): string {
    if (!this.phases.includes(phase)) {
      throw new Error(`Invalid phase: ${phase}`);
    }

    if (phase === 'plan formulation') {
      return (
        'You are directing a PhD student to help them come up with a good plan, and you interact with them through dialogue.\n' +
        'Your goal is to produce plans that would make good experiments for the given topic. ' +
        'You should aim for a very simple experiment that showcases your plan, not a complex one. ' +
        'You should integrate the provided literature review and come up with plans on how to expand and build on these works for the given topic. ' +
        'Your plans should provide a clear outline for how to achieve the task, including what machine learning models to use and implement, ' +
        'what types of datasets should be searched for and used to train the model, and the exact details of the experiment.\n'
      );
    } else if (phase === 'results interpretation') {
      return (
        'You are directing a PhD student to help them come up with an interpretation for results from an experiment, and you interact with them through dialogue.\n' +
        'Your goal is to interpret results from experiments that were previously run. ' +
        'You should read through the code and look at the results to understand what occurred. ' +
        'You should then discuss with the PhD student how they can interpret the results and give their feedback to improve their thoughts. ' +
        'You should integrate the provided literature review, code, and plans to come up with an exciting interpretation that could make a compelling paper. ' +
        'Your plans should provide a clear outline that can be used to write an academic paper.\n' +
        'Your interpretation should include numbers, relevant metrics to the experiment (e.g. accuracy or loss) and measures of significance. ' +
        'You must propagate this information accurately. ' +
        'You must also complete this in a reasonable amount of time and then submit your results.\n'
      );
    }
    return '';
  }

  /**
   * Returns a string describing the role of the agent.
   * @returns The role description.
   */
  roleDescription(): string {
    return 'a computer science postdoctoral student at a top university.';
  }
}
