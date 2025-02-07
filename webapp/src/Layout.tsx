import { ConfigProvider } from 'antd';
import { Outlet } from 'react-router-dom';
import { Footer } from '#/common/Footer.tsx';

export const Layout = () => {
  return (
    <ConfigProvider>
      <Outlet />
      <Footer />
    </ConfigProvider>
  );
};
