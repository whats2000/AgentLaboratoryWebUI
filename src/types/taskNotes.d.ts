export type Phase = 'plan formulation' | 'data preparation' | 'running experiments' | 'results interpretation' | 'report writing' | 'report refinement' | 'literature review';

/**
 * Task Note Configuration
 * There are some variables that you can use in the note, you can use them by putting them in double curly braces.
 * Example: "You should write the report in {{language}}"
 *
 * Here are the available variables for common use:
 * - research_topic: The research topic of the task
 * - api_key: OpenAI API Key
 * - deepseek_api_key: Deepseek API Key
 * - google_api_key: Google API Key
 * - anthropic_api_key: Anthropic API Key
 * - language: The language to use for the report
 * - llm_backend: The backend to use for the LLM
 */
export interface TaskNote {
  phases: Phase[];
  note: string;
}
