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
  const [a, b] = [5, 6];

  const fraction = `$$\\frac{${a}}{${b}} \\times \\frac{4}{11} = ?$$`;

  const sigma = `$$\\sum_{k=1}^\\infty 4n$$`;

  const quadratic = `$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$`;

  const trinomial = `$$ax^2 + bx + c = 0$$`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <article style={{ display: 'grid' }}>
          <Title>{title.toUpperCase()}</Title>
          <Subtitle>{title.toUpperCase()}</Subtitle>
          <Heading>{title.toUpperCase()}K</Heading>
          <Subheading>{title.toUpperCase()}</Subheading>
          <Copy>{description}</Copy>
        </article>

        <article style={{ display: 'grid' }}>
          <Title>
            <Latex displayMode>$$\LaTeX$$</Latex>
          </Title>

          <Copy>
            <Latex displayMode>$$(3\times 4) \div (5-3)^2 = ?$$</Latex>
          </Copy>

          <Copy>
            <Latex displayMode>{fraction}</Latex>
          </Copy>

          <Copy>
            <Latex displayMode>{sigma}</Latex>
          </Copy>

          <Copy>
            <Latex displayMode>{quadratic}</Latex>
            <div style={{ textAlign: 'center' }}>
              <small style={{ fontSize: '1.25rem', lineHeight: '2rem' }}>
                when
              </small>
            </div>
            <Latex displayMode>{trinomial}</Latex>
          </Copy>
        </article>
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
