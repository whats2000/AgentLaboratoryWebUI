import React, { useState } from 'react';
import { Layout, Switch, Button, Flex, Select, Menu } from 'antd';
import {
  SettingOutlined,
  SunOutlined,
  MoonOutlined,
  TranslationOutlined,
  PlayCircleOutlined,
  DashboardOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import SettingsDrawer from './SettingsDrawer';

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
  margin-right: 24px;
`;

const HeaderSection = styled(Flex)`
  align-items: center;
`;

interface HeaderProps {
  isDarkMode: boolean;
  onThemeChange: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onThemeChange }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (value: string) => {
    void i18n.changeLanguage(value);
  };

  const menuItems = [
    {
      key: '/config',
      icon: <PlayCircleOutlined />,
      label: t('navigation.setup'),
    },
    {
      key: '/monitor',
      icon: <DashboardOutlined />,
      label: t('navigation.monitor'),
    },
  ];

  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
  };

  const selectedKey =
    menuItems.find((item) => location.pathname.startsWith(item.key))?.key ||
    menuItems[0].key;

  return (
    <StyledHeader>
      <HeaderSection>
        <Logo>{t('header.title')}</Logo>
        <Menu
          mode='horizontal'
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{
            borderBottom: 'none',
            minWidth: '400px',
          }}
        />
      </HeaderSection>
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
