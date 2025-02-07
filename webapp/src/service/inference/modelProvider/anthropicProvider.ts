import { Anthropic } from '@anthropic-ai/sdk';

import { BaseProvider } from './types';

export class AnthropicProvider implements BaseProvider {
  private readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async getResponse(
    apiKey: string,
    modelName: string,
    userPrompt: string,
    systemPrompt: string,
    temperature?: number,
  ): Promise<string> {
    const clientConfig: Record<string, string> = {
      apiKey,
    };
    if (this.baseURL !== '') {
      clientConfig['baseURL'] = this.baseURL;
    }
    const client = new Anthropic(clientConfig);
    const response = await client.messages.create({
      max_tokens: userPrompt.includes('sonnet') ? 8192 : 4096,
      model: modelName,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
      temperature,
    });

    if ('text' in response.content[0]) {
      return response.content[0].text;
    }

    return '';
  }
}
