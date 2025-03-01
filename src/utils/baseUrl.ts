/**
 * Gets the base URL from the environment or the current deployed location
 */
export const getBaseUrl = (): string => {
  // In production, use the BASE_URL from Vite
  if (import.meta.env.BASE_URL && import.meta.env.BASE_URL !== '/') {
    return import.meta.env.BASE_URL;
  }
  
  // Fallback to no base for local development
  return '';
};
