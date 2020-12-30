import Head from 'next/head';
import React from 'react';

import Footer from 'shared/components/Footer';
import Header from 'shared/components/Header';
import Navigation from 'shared/components/Navigation';

import ApplicationGrid from './grids/ApplicationGrid';
import ContentGrid from './grids/ContentGrid';
import RootGrid from './grids/RootGrid';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RootGrid>
        <Header />
        <ApplicationGrid>
          <Navigation />
          <ContentGrid>
            {children}
            <Footer />
          </ContentGrid>
        </ApplicationGrid>
      </RootGrid>
    </>
  );
};

export default Layout;
