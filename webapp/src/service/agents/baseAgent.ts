import { LanguageModel, TaskNote } from '@/types';
import { extractPrompt } from '@/utils';
import { queryModel } from '@/service/inference';

export abstract class BaseAgent {
  model: LanguageModel;
  notes: TaskNote[];
  maxSteps: number;
  phases: string[];
  plan: string;
  report: string;
  history: Array<[number | null, string]>;
  prevCommand: string;
  prevReport: string;
  expResults: string;
  datasetCode: string;
  resultsCode: string;
  litReviewSum: string;
  interpretation: string;
  prevExpResults: string;
  reviewerResponse: string;
  prevResultsCode: string;
  prevInterpretation: string;
  secondRound: boolean;
  maxHistLen: number;

  constructor(
    model: LanguageModel,
    notes: TaskNote[] = [],
    maxSteps: number = 100,
  ) {
    this.model = model;
    this.notes = notes;
    this.maxSteps = maxSteps;
    this.phases = [];
    this.plan = '';
    this.report = '';
    this.history = [];
    this.prevCommand = '';
    this.prevReport = '';
    this.expResults = '';
    this.datasetCode = '';
    this.resultsCode = '';
    this.litReviewSum = '';
    this.interpretation = '';
    this.prevExpResults = '';
    this.reviewerResponse = '';
    this.prevResultsCode = '';
    this.prevInterpretation = '';
    this.secondRound = false;
    this.maxHistLen = 15;
  }

  static cleanText(text: string): string {
    return text.replace('```\n', '```');
  }

  /**
   * Runs an inference cycle.
   */
  async inference(
    researchTopic: string,
    phase: string,
    step: number,
    feedback: string = '',
    temperature?: number,
  ): Promise<string> {
    const systemPrompt = `You are ${this.roleDescription()} \nTask instructions: ${this.phasePrompt(phase)}\n${this.commandDescriptions(phase)}`;
    const contextStr = this.context(phase);
    const historyStr = this.history.map((h) => h[1]).join('\n');
    const phaseNotes = this.notes.filter(
      (n) => n.phases && n.phases.includes(phase),
    );
    const notesStr =
      phaseNotes.length > 0
        ? `Notes for the task objective: ${JSON.stringify(phaseNotes)}\n`
        : '';
    let completeStr = '';
    if (step / (this.maxSteps - 1) > 0.7) {
      completeStr = 'You must finish this task and submit as soon as possible!';
    }
    const prompt = `${contextStr}
    ${'~'.repeat(10)}
    History: ${historyStr}
    ${'~'.repeat(10)}
    Current Step #${step}, Phase: ${phase}
    ${completeStr}
    [Objective] Your goal is to perform research on the following topic: ${researchTopic}
    Feedback: ${feedback}
    Notes: ${notesStr}
    Your previous command was: ${this.prevCommand}. Make sure your new output is very different.
    Please produce a single command below:
    `;

    let modelResponse: string = await queryModel({
      languageModel: this.model,
      prompt,
      systemPrompt,
      temperature,
    });
    console.log('##################', phase, '##################');
    modelResponse = BaseAgent.cleanText(modelResponse);
    this.prevCommand = modelResponse;
    let stepsExp: number | null = null;
    if (feedback && feedback.includes('```EXPIRATION')) {
      const firstLine = feedback.split('\n')[0];
      const match = firstLine.match(/```EXPIRATION\s+(\d+)/);
      if (match) {
        stepsExp = parseInt(match[1]);
      }
      feedback = extractPrompt(feedback, 'EXPIRATION');
    }
    this.history.push([
      stepsExp,
      `Step #${step}, Phase: ${phase}, Feedback: ${feedback}, Your response: ${modelResponse}`,
    ]);

    // Update history expiration counters
    for (let i = this.history.length - 1; i >= 0; i--) {
      let expiration = this.history[i][0];
      if (expiration !== null) {
        expiration = expiration - 1;
        if (expiration < 0) {
          this.history.splice(i, 1);
        } else {
          this.history[i][0] = expiration;
        }
      }
    }
    if (this.history.length >= this.maxHistLen) {
      this.history.shift();
    }
    return modelResponse;
  }

  reset(): void {
    this.history = [];
    this.prevCommand = '';
  }

  // Abstract methods for agents to implement
  abstract context(phase: string): string;
  abstract phasePrompt(phase: string): string;
  abstract roleDescription(): string;
  abstract commandDescriptions(phase: string): string;
  abstract exampleCommand(phase: string): string;
}
