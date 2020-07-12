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
