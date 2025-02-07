import { GoogleGenerativeAI } from '@google/generative-ai';

import { BaseProvider } from './types';

export class GoogleGenerativeAIProvider implements BaseProvider {
  async getResponse(
    apiKey: string,
    modelName: string,
    userPrompt: string,
    systemPrompt: string,
    temperature?: number,
  ): Promise<string> {
    const client = new GoogleGenerativeAI(apiKey).getGenerativeModel({
      model: modelName,
    });
    const chatSession = client.startChat({
      systemInstruction: {
        role: 'system',
        parts: [{ text: systemPrompt }],
      },
      generationConfig: temperature ? { temperature } : undefined,
    });

    const response = await chatSession.sendMessage(userPrompt);
    return response.response.text();
  }
}
