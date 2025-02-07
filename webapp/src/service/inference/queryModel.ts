import { t } from 'i18next';
import { encodingForModel, getEncoding, Tiktoken } from 'js-tiktoken';

import { LanguageModel } from '@/types';
import { currCostEst } from './costEstimator';
import { TOKENS_IN, TOKENS_OUT } from './tokensCounter';
import { sleep } from './utils';

export async function queryModel(generateOptions: {
  languageModel: LanguageModel;
  prompt: string;
  systemPrompt: string;
  temperature?: number;
  tries?: number;
  timeout?: number;
  printCostCallback?: (costFeedback: string) => void;
}): Promise<string> {
  const {
    languageModel: { apiKey, provider, modelName, baseURL },
    prompt,
    systemPrompt,
    temperature,
    tries = 5,
    timeout = 5.0,
    printCostCallback,
  } = generateOptions;

  if (provider !== 'ollama' && apiKey === '') {
    throw new Error('API Not Found');
  }

  for (let attempt = 0; attempt < tries; attempt++) {
    try {
      let modelProvider;
      switch (provider) {
        case 'anthropic':
          const { AnthropicProvider } = await import(
            './modelProvider/anthropicProvider'
          );
          modelProvider = new AnthropicProvider(baseURL);
          break;
        case 'google':
          const { GoogleGenerativeAIProvider } = await import(
            './modelProvider/googleGenerativeAIProvider'
          );
          modelProvider = new GoogleGenerativeAIProvider();
          break;
        case 'deepseek':
        case 'openai':
          const { OpenaiProvider } = await import(
            './modelProvider/openaiProvider'
          );
          modelProvider = new OpenaiProvider(baseURL);
          break;
        case 'ollama':
          const { OllamaProvider } = await import(
            './modelProvider/ollamaProvider'
          );
          modelProvider = new OllamaProvider(baseURL);
          break;
        default:
          throw new Error('Unsupported provider');
      }

      const answer = await modelProvider.getResponse(
        apiKey,
        modelName,
        prompt,
        systemPrompt,
        temperature,
      );

      // Update cost estimation using tiktoken
      try {
        let encoding: Tiktoken;
        if (
          ['o1-preview', 'o1-mini', 'claude-3.5-sonnet', 'o1'].includes(
            modelName,
          )
        ) {
          encoding = encodingForModel('gpt-4o');
        } else if (modelName === 'deepseek-chat') {
          encoding = getEncoding('cl100k_base');
        } else {
          try {
            encoding = getEncoding(modelName as any);
          } catch (err) {
            encoding = getEncoding('cl100k_base');
          }
        }
        if (!(modelName in TOKENS_IN)) {
          TOKENS_IN[modelName] = 0;
          TOKENS_OUT[modelName] = 0;
        }
        TOKENS_IN[modelName] += encoding.encode(systemPrompt + prompt).length;
        TOKENS_OUT[modelName] += encoding.encode(answer).length;
        if (printCostCallback) {
          // printCostCallback(
          //   `Current experiment cost = $${currCostEst()}, ** Approximate values, may not reflect true cost`,
          // );
          printCostCallback(
            t('modelProvider.costEstimation', {
              cost: currCostEst(),
            }),
          );
        }
      } catch (err) {
        if (printCostCallback) {
          //printCostCallback(`Cost approximation error: ${err}`);
          printCostCallback(
            t('modelProvider.costEstimationError', { error: err }),
          );
        }
      }
      return answer;
    } catch (err) {
      console.log('Inference Exception:', err);
      await sleep(timeout * 1000);
    }
  }
  throw new Error('Max retries: timeout');
}
