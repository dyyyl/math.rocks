import { AppProps } from 'next/app';
import React from 'react';

import Layout from 'shared/layout/Layout';

import GlobalStyle from 'shared/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyle />
    </>
  );
};

export default App;
