import Latex from 'react-latex';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import styled from 'styled-components';

import {
  Copy,
  Heading,
  Subheading,
  Subtitle,
  Title,
} from 'shared/components/Typography';

const Small = styled.small`
  font-size: 1.4rem;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:visited {
    color: var(--primary);
  }

  &:hover {
    color: var(--brand);
  }

  &:focus {
    color: var(--brand);
  }
`;

interface Props {
  title: string;
  description: string;
}

const Index: NextPage<Props> = ({ title, description }: Props) => {
  const [a, b] = [5, 6];

  const fraction = `$$\\frac{${a}}{${b}} \\times \\frac{4}{11} = \\bar s$$`;

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
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
          <Heading>Heading</Heading>
          <Subheading>Subheading</Subheading>
          <Copy>COPY - {description}</Copy>
        </article>

        <article style={{ display: 'grid' }}>
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
            <span style={{ textAlign: 'center', display: 'block' }}>
              <small style={{ fontSize: '1.25rem', lineHeight: '2rem' }}>
                when
              </small>
            </span>
            <Latex displayMode>{trinomial}</Latex>
          </Copy>

          <Small>
            Powered by{' '}
            <ExternalLink
              href="https://www.latex-project.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Latex>$$\LaTeX$$</Latex>
            </ExternalLink>
          </Small>
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
