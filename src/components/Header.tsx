import React, { useState } from 'react';
import { Layout, Switch, Button, Flex } from 'antd';
import { BulbOutlined, BulbFilled, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
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
`;

interface HeaderProps {
  isDarkMode: boolean;
  onThemeChange: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onThemeChange }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <StyledHeader>
      <Logo>Agent Laboratory Configuration</Logo>
      <Flex align={'center'} gap={10}>
        <Button
          icon={<SettingOutlined />}
          type='text'
          size={'large'}
          onClick={() => setSettingsOpen(true)}
        />
        <Switch
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<BulbFilled />}
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
