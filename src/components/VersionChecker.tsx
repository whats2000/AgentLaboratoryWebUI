import React, { useEffect, useState } from 'react';
import { Badge, Button, Tooltip, notification } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { VersionInfo } from '@/types';
import { checkForUpdates, updateWebUI } from '@/api';

const VersionBadge = styled(Badge)`
  margin-right: 8px;
`;

const VersionText = styled.span`
  margin-right: 8px;
  font-size: 12px;
  color: ${(props) => (props.theme.isDark ? '#999' : '#666')};
`;

const VersionChecker: React.FC = () => {
  const { t } = useTranslation();
  const [updateInfo, setUpdateInfo] = useState<{
    hasUpdate: boolean;
    currentVersion: string;
    latestVersion?: VersionInfo;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkVersion = async () => {
      const result = await checkForUpdates();
      setUpdateInfo(result);

      // Only show the update notification once a day
      const lastCheckTime = localStorage.getItem('agent-lab.last-check-update');
      if (
        lastCheckTime &&
        Date.now() - parseInt(lastCheckTime, 10) < 1000 * 60 * 60 * 24
      ) {
        return;
      }
      if (result.hasUpdate) {
        notification.info({
          message: t('version.updateAvailable'),
          description: t('version.updateDescription', {
            current: result.currentVersion,
            latest: result.latestVersion?.version,
          }),
          placement: 'bottomRight',
          duration: 10,
        });
      }
      localStorage.setItem(
        'agent-lab.last-check-update',
        Date.now().toString(),
      );
    };
    void checkVersion();
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    await updateWebUI();
    setLoading(false);

    // Reload the page to apply the changes
    window.location.reload();
  };

  if (!updateInfo) {
    return null;
  }

  return (
    <div>
      <VersionText>
        {t('version.current')}: {updateInfo.currentVersion}
      </VersionText>

      {updateInfo.hasUpdate && updateInfo.latestVersion && (
        <>
          <VersionBadge dot status='processing' />
          <Tooltip
            title={
              <>
                {t('version.newVersion')}: {updateInfo.latestVersion.version}
                <br />
                {t('version.releaseDate')}:{' '}
                {updateInfo.latestVersion.releaseDate || t('version.unknown')}
              </>
            }
          >
            <Button
              type='primary'
              size='small'
              icon={<CloudDownloadOutlined />}
              onClick={handleUpdate}
              loading={loading}
            >
              {t('version.download')}
            </Button>
          </Tooltip>
        </>
      )}
    </div>
  );
};

export default VersionChecker;
