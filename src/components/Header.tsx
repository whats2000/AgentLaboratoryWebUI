import React, { useState } from 'react';
import { Layout, Switch, Button, Flex, Select, Menu, Drawer } from 'antd';
import {
  SettingOutlined,
  SunOutlined,
  MoonOutlined,
  TranslationOutlined,
  PlayCircleOutlined,
  DashboardOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import SettingsDrawer from './SettingsDrawer';
import VersionChecker from './VersionChecker';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background: ${(props) => (props.theme.isDark ? '#141414' : '#fff')};
  color: ${(props) => (props.theme.isDark ? '#fff' : '#000')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
  height: auto;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 24px 0 0;
`;

const HeaderSection = styled(Flex)`
  align-items: center;
`;

const StyledMenu = styled(Menu)`
  border-bottom: none;
  min-width: 400px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }
`;

const MobileVersionChecker = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 16px;
  }
`;

const VersionCheckerWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

interface HeaderProps {
  isDarkMode: boolean;
  onThemeChange: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onThemeChange }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const selectedKey =
    menuItems.find((item) => location.pathname.startsWith(item.key))?.key ||
    menuItems[0].key;

  return (
    <StyledHeader>
      <HeaderSection>
        <MobileMenuButton
          icon={<MenuOutlined />}
          type='text'
          onClick={() => setMobileMenuOpen(true)}
        />
        <Logo>{t('header.title')}</Logo>
        <StyledMenu
          mode='horizontal'
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </HeaderSection>
      <Flex align={'center'} gap={10}>
        <VersionCheckerWrapper>
          <VersionChecker />
        </VersionCheckerWrapper>
        <Select
          defaultValue={i18n.language}
          style={{ width: 150 }}
          onChange={handleLanguageChange}
          options={[
            { value: 'en', label: 'English' },
            { value: 'zh_CN', label: '简体中文' },
            { value: 'zh_TW', label: '繁體中文' },
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

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={t('header.title')}
        placement='left'
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={300}
        styles={{ body: { padding: 0 } }}
      >
        <Menu
          mode='vertical'
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={menuItems}
          style={{ border: 'none' }}
        />
        <MobileVersionChecker>
          <VersionChecker />
        </MobileVersionChecker>
      </Drawer>
    </StyledHeader>
  );
};

export default Header;
