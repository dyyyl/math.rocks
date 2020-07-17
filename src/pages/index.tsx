import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

interface Props {
  title: string;
  description: string;
}

const Index: NextPage<Props> = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main
        style={{
          height: '100%',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: '1.25rem',
          }}
        >
          Welcome, and enjoy your stay.
        </p>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}

export default Index;
