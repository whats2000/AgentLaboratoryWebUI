import { VersionInfo } from '@/types';
import { VERSION_FILE_URL } from '@/config';
import packageJson from '../../package.json';

const parseVersionString = (version: string): number[] => {
  return version
    .replace(/[^\d.]/g, '')
    .split('.')
    .map(Number);
};

export const isNewerVersion = (current: string, latest: string): boolean => {
  const currentParts = parseVersionString(current);
  const latestParts = parseVersionString(latest);

  for (let i = 0; i < Math.max(currentParts.length, latestParts.length); i++) {
    const currentPart = currentParts[i] || 0;
    const latestPart = latestParts[i] || 0;

    if (latestPart > currentPart) {
      return true;
    } else if (latestPart < currentPart) {
      return false;
    }
  }

  return false;
};

export const getCurrentVersion = (): string => {
  return packageJson.version;
};

export const checkForUpdates = async (): Promise<{
  hasUpdate: boolean;
  currentVersion: string;
  latestVersion?: VersionInfo;
}> => {
  try {
    const response = await fetch(VERSION_FILE_URL);
    if (!response.ok) {
      console.error('Error checking for updates:', response.statusText);
      return {
        hasUpdate: false,
        currentVersion: getCurrentVersion(),
      };
    }

    const latestVersion: VersionInfo = await response.json();
    const currentVersion = getCurrentVersion();
    const hasUpdate = isNewerVersion(currentVersion, latestVersion.version);

    return {
      hasUpdate,
      currentVersion,
      latestVersion,
    };
  } catch (error) {
    console.error('Error checking for updates:', error);
    return {
      hasUpdate: false,
      currentVersion: getCurrentVersion(),
    };
  }
};
