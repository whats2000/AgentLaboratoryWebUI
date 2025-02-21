import axios from 'axios';

import {
  ResearchPayload,
  ResearchResponse,
  SavesResponse,
  SettingsData,
} from '@/types';
import { API_URL } from '@/config';
import { DEFAULT_SETTINGS } from '@/constants';

export const getSettings = async (): Promise<SettingsData> => {
  const response = await axios.get<SettingsData>(`${API_URL}/api/settings`);

  // Verify that the response data is an object
  if (typeof response.data !== 'object') {
    return DEFAULT_SETTINGS;
  } else {
    return { ...DEFAULT_SETTINGS, ...response.data };
  }
};

export const getSaves = async (): Promise<SavesResponse> => {
  const response = await axios.get<SavesResponse>(`${API_URL}/api/saves`);
  if (Array.isArray(response.data.saves)) {
    return response.data;
  }
  return { saves: [] };
};

export const postResearch = async (
  payload: ResearchPayload,
): Promise<ResearchResponse> => {
  const response = await axios.post<ResearchResponse>('/api/research', payload);
  return response.data;
};
