import { Ollama } from 'ollama/browser';

import { BaseProvider } from './types';

export class OllamaProvider implements BaseProvider {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getResponse(
    _apiKey: string,
    modelName: string,
    userPrompt: string,
    systemPrompt: string,
    temperature?: number,
  ): Promise<string> {
    if (!this.baseURL) {
      throw new Error(
        'No base URL provided in OllamaProvider, which is required for Ollama',
      );
    }

    const client = new Ollama({
      host: this.baseURL,
    });
    const response = await client.chat({
      model: modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      stream: false,
      options: temperature ? { temperature } : undefined,
    });

    return response.message.content;
  }
}
