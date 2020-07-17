import React from 'react';

import Header from 'shared/components/Header';
import Navigation from 'shared/components/Navigation';

import ApplicationGrid from './grids/ApplicationGrid';
import RootGrid from './grids/RootGrid';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <RootGrid>
      <Header />
      <ApplicationGrid>
        <Navigation />
        {children}
      </ApplicationGrid>
    </RootGrid>
  );
};

export default Layout;
