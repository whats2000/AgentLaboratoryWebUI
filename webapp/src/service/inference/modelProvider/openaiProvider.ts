import { OpenAI } from 'openai';

import { BaseProvider } from './types';

export class OpenaiProvider implements BaseProvider {
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

    // Override the base URL if it is set
    if (this.baseURL !== '') {
      clientConfig['baseURL'] = this.baseURL;
    }

    const client = new OpenAI(clientConfig);
    const response = await client.chat.completions.create({
      model: modelName,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: temperature,
    });
    return response.choices[0].message.content || '';
  }
}
