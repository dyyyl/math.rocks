import Latex from 'react-latex';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import {
  Copy,
  Heading,
  Subheading,
  Subtitle,
  Title,
} from 'shared/components/Typography';

interface Props {
  title: string;
  description: string;
}

const Index: NextPage<Props> = ({ title, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>{title.toUpperCase()}</Subtitle>
        <Heading>{title.toUpperCase()}K</Heading>
        <Subheading>{title.toUpperCase()}</Subheading>
        <Copy>{description}</Copy>

        <Title>
          <Latex displayMode>$$\LaTeX$$</Latex>
        </Title>

        <Copy>
          <Latex displayMode>$$(3\times 4) \div (5-3)^2$$</Latex>
        </Copy>
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
