import React, { useState } from 'react';
import { Layout, Switch, Button, Flex, Select } from 'antd';
import {
  SettingOutlined,
  SunOutlined,
  MoonOutlined,
  TranslationOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import SettingsDrawer from './SettingsDrawer';
import { useTranslation } from 'react-i18next';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${(props) => (props.theme.isDark ? '#141414' : '#fff')};
  color: ${(props) => (props.theme.isDark ? '#fff' : '#000')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

interface HeaderProps {
  isDarkMode: boolean;
  onThemeChange: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onThemeChange }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    void i18n.changeLanguage(value);
  };

  return (
    <StyledHeader>
      <Logo>{t('header.title')}</Logo>
      <Flex align={'center'} gap={10}>
        <Select
          defaultValue={i18n.language}
          style={{ width: 200 }}
          onChange={handleLanguageChange}
          options={[
            { value: 'en', label: 'English' },
            { value: 'zh_cn', label: '简体中文' },
            { value: 'zh_tw', label: '繁體中文' },
          ]}
          prefix={<TranslationOutlined />}
        />
        <Button
          icon={<SettingOutlined />}
          type='text'
          size={'large'}
          onClick={() => setSettingsOpen(true)}
        />
        <Switch
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined />}
          checked={isDarkMode}
          onChange={onThemeChange}
        />
      </Flex>
      <SettingsDrawer
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </StyledHeader>
  );
};

export default Header;
