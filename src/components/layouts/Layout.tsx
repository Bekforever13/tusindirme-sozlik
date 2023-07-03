import React from 'react';
import Header from 'src/components/layouts/header/Header';
import Footer from 'src/components/layouts/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
