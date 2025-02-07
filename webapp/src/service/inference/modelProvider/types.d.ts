export interface BaseProvider {
  getResponse(
    apiKey: string,
    modelName: string,
    userPrompt: string,
    systemPrompt: string,
    temperature?: number,
  ): Promise<string>;
}
