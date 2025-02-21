import { ConfigProvider } from 'antd';
import ConfigurationPage from '#/ConfigurationPage.tsx';

function App() {
  return (
    <ConfigProvider theme={{}}>
      <ConfigurationPage />
    </ConfigProvider>
  );
}

export default App;
