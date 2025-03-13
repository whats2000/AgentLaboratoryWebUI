export const API_URL =
  localStorage.getItem('agent-lab.apiUrl') || 'http://localhost:5000';

export const VERSION_FILE_URL =
  'https://whats2000.github.io/AgentLaboratoryWebUI/version.json';

export const AVAILABLE_MODELS = [
  'o1',
  'o1-preview',
  'o1-mini',
  'o3-mini',
  'gpt-4o',
  'gpt-4o-mini',
  'deepseek-chat',
  'claude-3-7-sonnet-latest',
  'claude-3-5-sonnet-latest',
  'claude-3-5-haiku-latest',
  'gemini-2.0-flash',
  'gemini-2.0-flash-lite',
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
