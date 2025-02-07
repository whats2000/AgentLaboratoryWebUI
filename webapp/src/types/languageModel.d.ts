export type ModelProviderType =
  | 'openai'
  | 'anthropic'
  | 'google'
  | 'deepseek'
  | 'ollama';

export interface LanguageModel {
  provider: ModelProviderType;
  modelName: string;
  baseURL: string;
  apiKey: string;
}
