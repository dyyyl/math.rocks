import React from 'react';

import Header from 'shared/components/Header';

import RootGrid from './grids/RootGrid';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <RootGrid>
      <Header />
      {children}
    </RootGrid>
  );
};

export default Layout;
