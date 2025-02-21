import { useState } from 'react';
import { ConfigProvider, Layout, theme } from 'antd';
import styled, { ThemeProvider } from 'styled-components';

import { ThemeInterface } from '@/types';
import { defaultPrimaryColor, defaultPrimaryColorDark } from '@/config';
import ConfigurationPage from '#/ConfigurationPage.tsx';
import Header from '#/Header.tsx';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: ${(props) => (props.theme.isDark ? '#141414' : '#f0f2f5')};
`;

const StyledContent = styled(Content)`
  background: ${(props) => (props.theme.isDark ? '#141414' : '#f0f2f5')};
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  const themeConfig: ThemeInterface = {
    isDark: isDarkMode,
    primaryColor: isDarkMode ? defaultPrimaryColorDark : defaultPrimaryColor,
  };

  return (
    <ThemeProvider theme={themeConfig}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: isDarkMode
              ? defaultPrimaryColorDark
              : defaultPrimaryColor,
          },
        }}
      >
        <StyledLayout>
          <Header isDarkMode={isDarkMode} onThemeChange={handleThemeChange} />
          <StyledContent>
            <ConfigurationPage />
          </StyledContent>
        </StyledLayout>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;
