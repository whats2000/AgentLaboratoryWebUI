import React from 'react';
import { Layout, Switch, Space } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import styled from 'styled-components';

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
  return (
    <StyledHeader>
      <Logo>Agent Laboratory Configuration</Logo>
      <Space>
        <Switch
          checkedChildren={<BulbOutlined />}
          unCheckedChildren={<BulbFilled />}
          checked={isDarkMode}
          onChange={onThemeChange}
        />
      </Space>
    </StyledHeader>
  );
};

export default Header;
