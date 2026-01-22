export const API_URL =
  localStorage.getItem('agent-lab.apiUrl') || 'http://localhost:5000';

export const VERSION_FILE_URL =
  'https://whats2000.github.io/AgentLaboratoryWebUI/version.json';

export const AVAILABLE_MODELS = [
  // OpenAI o-series (reasoning models)
  'o1',
  'o1-preview',
  'o1-mini',
  'o3-mini',
  'o4-mini',
  // OpenAI GPT-5 series
  'gpt-5.2',
  'gpt-5.2-pro',
  'gpt-5-mini',
  // OpenAI GPT-4.1 series
  'gpt-4.1',
  'gpt-4.1-mini',
  'gpt-4.1-nano',
  // OpenAI GPT-4o series
  'gpt-4o',
  'gpt-4o-mini',
  // DeepSeek
  'deepseek-chat',
  // Anthropic Claude 4.5
  'claude-4.5-opus-latest',
  'claude-4.5-sonnet-latest',
  'claude-4.5-haiku-latest',
  // Anthropic Claude 4.1 & 4
  'claude-4.1-opus-latest',
  'claude-4-opus-latest',
  'claude-4-sonnet-latest',
  // Anthropic Claude 3.x
  'claude-3-7-sonnet-latest',
  'claude-3-5-sonnet-latest',
  'claude-3-5-haiku-latest',
  // Google Gemini 3.0
  'gemini-3.0-pro',
  'gemini-3.0-flash',
  // Google Gemini 2.5
  'gemini-2.5-pro',
  'gemini-2.5-flash',
  'gemini-2.5-flash-lite',
  // Google Gemini 2.0
  'gemini-2.0-flash',
];

export const AVAILABLE_LANGUAGES = [
  'English',
  'Chinese-Simplified',
  'Chinese-Traditional',
  'Japanese',
  'Korean',
  'Filipino',
  'French',
  'Slovak',
  'Portuguese',
  'Spanish',
  'Turkish',
  'Hindi',
  'Bengali',
  'Vietnamese',
  'Russian',
  'Arabic',
  'Farsi',
  'Italian',
];

// Gradio use soft orange as primary color
export const defaultPrimaryColor = '#fdba74';
export const defaultPrimaryColorDark = '#ea580c';
