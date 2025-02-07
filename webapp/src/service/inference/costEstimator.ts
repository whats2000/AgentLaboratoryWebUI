import { TOKENS_IN, TOKENS_OUT } from './tokensCounter';

const COST_MAP_TOKEN_IN: Record<string, number> = {
  'gpt-4o': 2.5 / 1000000,
  'gpt-4o-mini': 0.15 / 1000000,
  'o1-preview': 15.0 / 1000000,
  'o1-mini': 3.0 / 1000000,
  'claude-3-5-sonnet': 3.0 / 1000000,
  'deepseek-chat': 1.0 / 1000000,
  o1: 15.0 / 1000000,
  'gemini-2.0-flash': 0.1 / 1000000,
  'gemini-2.0-flash-lite': 0.075 / 1000000,
};

const COST_MAP_TOKEN_OUT: Record<string, number> = {
  'gpt-4o': 10.0 / 1000000,
  'gpt-4o-mini': 0.6 / 1000000,
  'o1-preview': 60.0 / 1000000,
  'o1-mini': 12.0 / 1000000,
  'claude-3-5-sonnet': 12.0 / 1000000,
  'deepseek-chat': 5.0 / 1000000,
  o1: 60.0 / 1000000,
  'gemini-2.0-flash': 0.4 / 1000000,
  'gemini-2.0-flash-lite': 0.3 / 1000000,
};

/**
 * Estimate the cost of the current inference session.
 * @returns The estimated cost of the current inference session.
 */
export const currCostEst = (): number => {
  let totalCost = 0;
  for (const key in TOKENS_IN) {
    if (COST_MAP_TOKEN_IN[key] !== undefined) {
      totalCost += COST_MAP_TOKEN_IN[key] * TOKENS_IN[key];
    }
  }
  for (const key in TOKENS_OUT) {
    if (COST_MAP_TOKEN_OUT[key] !== undefined) {
      totalCost += COST_MAP_TOKEN_OUT[key] * TOKENS_OUT[key];
    }
  }
  return totalCost;
};
