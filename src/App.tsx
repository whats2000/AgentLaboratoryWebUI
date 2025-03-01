import { useState } from 'react';
import { ConfigProvider, Layout, message, theme } from 'antd';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ThemeInterface } from '@/types';
import { defaultPrimaryColor, defaultPrimaryColorDark } from '@/config';
import { getBaseUrl } from '@/utils';
import Header from '#/Header';
import ConfigurationPage from '@/page/ConfigurationPage';
import MonitorPage from '@/page/MonitorPage';

const { Content } = Layout;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
  background: ${(props) => (props.theme.isDark ? '#141414' : '#f0f2f5')};
`;

const StyledContent = styled(Content)`
  background: ${(props) => (props.theme.isDark ? '#141414' : '#f0f2f5')};
`;

function App() {
  const [_, contextHolder] = message.useMessage();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('agent-lab.dark-mode') === 'true',
  );

  const handleThemeChange = (checked: boolean) => {
    setIsDarkMode(checked);

    // Save the theme preference to local storage
    localStorage.setItem('agent-lab.dark-mode', checked.toString());
  };

  const themeConfig: ThemeInterface = {
    isDark: isDarkMode,
    primaryColor: isDarkMode ? defaultPrimaryColorDark : defaultPrimaryColor,
  };

  return (
    <>
      {contextHolder}
      <ThemeProvider theme={themeConfig}>
        <ConfigProvider
          theme={{
            algorithm: [
              isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            ],
            token: {
              colorPrimary: isDarkMode
                ? defaultPrimaryColorDark
                : defaultPrimaryColor,
            },
          }}
        >
          <BrowserRouter basename={getBaseUrl()}>
            <StyledLayout>
              <Header
                isDarkMode={isDarkMode}
                onThemeChange={handleThemeChange}
              />
              <StyledContent>
                <Routes>
                  <Route path='/config' element={<ConfigurationPage />} />
                  <Route path='/monitor' element={<MonitorPage />} />
                  <Route path='*' element={<Navigate to='/config' replace />} />
                </Routes>
              </StyledContent>
            </StyledLayout>
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
