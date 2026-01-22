import { ResearchPayload } from '@/types';

export const DEFAULT_SETTINGS: ResearchPayload = {
  research_topic: '',
  api_key: '',
  deepseek_api_key: '',
  google_api_key: '',
  anthropic_api_key: '',
  llm_backend: 'gpt-4o',
  custom_llm_backend: '',
  ollama_max_tokens: 2048,
  language: 'English',
  copilot_mode: false,
  compile_latex: true,
  num_papers_lit_review: 5,
  mlesolver_max_steps: 3,
  papersolver_max_steps: 5,
  load_existing: false,
  load_existing_path: '',
};
