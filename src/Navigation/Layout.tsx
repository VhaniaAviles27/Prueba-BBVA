import React from 'react';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideBar />
      <main style={{ flex: 1, paddingTop: '20px', paddingLeft:'50px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
