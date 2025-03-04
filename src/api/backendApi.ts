import axios from 'axios';
import { message } from 'antd';

import {
  ResearchPayload,
  ResearchResponse,
  SavesResponse,
  SettingsData,
  TaskNote,
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

export const saveSettings = async (payload: ResearchPayload) => {
  await axios.post(`${API_URL}/api/settings`, {
    ...DEFAULT_SETTINGS,
    ...payload,
  });

  void message.success('Settings saved automatically', 0.5);
};

export const getTaskNotes = async (): Promise<TaskNote[]> => {
  try {
    const response = await axios.get<TaskNote[]>(
      `${API_URL}/api/task_note_config`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching task notes:', error);
    return [];
  }
};

export const saveTaskNotes = async (payload: TaskNote[]) => {
  try {
    await axios.post(`${API_URL}/api/task_note_config`, payload);
    void message.success('Task notes saved successfully', 0.5);
  } catch (error) {
    console.error('Error saving task notes:', error);
    void message.error('Failed to save task notes');
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
  await saveSettings(payload);
  const response = await axios.post<ResearchResponse>(
    `${API_URL}/api/research`,
    payload,
  );

  if (response.data.status.includes('Error')) {
    void message.error(response.data.status);
  }

  return response.data;
};

export const updateWebUI = async () => {
  try {
    await axios.post(`${API_URL}/api/updateWebUI`);
  } catch (error) {
    console.error('Error updating web UI:', error);
  }
};
