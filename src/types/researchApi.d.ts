export interface SettingsData {
  research_topic: string;
  api_key: string;
  deepseek_api_key: string;
  google_api_key: string;
  anthropic_api_key: string;
  llm_backend: string;
  custom_llm_backend: string;
  ollama_max_tokens: number;
  language: string;
  copilot_mode: boolean;
  compile_latex: boolean;
  num_papers_lit_review: number;
  mlesolver_max_steps: number;
  papersolver_max_steps: number;
}

export interface SavesResponse {
  saves: string[];
}

export interface ResearchResponse {
  status: string;
}

export interface ResearchPayload {
  research_topic: string;
  api_key: string;
  deepseek_api_key: string;
  google_api_key: string;
  anthropic_api_key: string;
  llm_backend: string;
  custom_llm_backend: string;
  ollama_max_tokens: number;
  language: string;
  copilot_mode: boolean;
  compile_latex: boolean;
  num_papers_lit_review: number;
  mlesolver_max_steps: number;
  papersolver_max_steps: number;
  load_existing: boolean;
  load_existing_path: string;
}
