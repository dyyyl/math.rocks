import Link from 'next/link';
import React from 'react';

import Header from 'shared/components/Header';
import InternalLink from 'shared/components/InternalLink';

import RootGrid from './grids/RootGrid';

import styled from 'styled-components';

const CandyStripe = styled.div`
  @media screen and (min-width: 500px) {
    height: 5rem;
    border-top: 1px solid black;
    align-self: end;
    background: repeating-linear-gradient(45deg, #1a1a1a 0 1px, #fbfbfb 0 15px);
  }
`;

const Navigation = styled.nav`
  height: 4rem;

  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 1fr;
  grid-area: navigation;

  overflow-x: scroll;
  border-top: 1px solid var(--primary);

  @media screen and (min-width: 500px) {
    height: 100%;
    position: sticky;
    border-top: 0;
    border-right: 1px solid var(--primary);

    grid-template-columns: 1fr;
    grid-template-rows: max-content;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const ApplicationGrid = styled.div`
  display: grid;
  grid-template-rows: auto max-content;
  grid-template-areas:
    'main'
    'navigation';

  @media screen and (min-width: 500px) {
    max-height: calc(100vh - 5rem);
    grid-template-columns: 20rem auto;
    grid-template-rows: 1fr;
    grid-template-areas: 'navigation main';
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <RootGrid>
      <Header />
      <ApplicationGrid>
        <Navigation>
          <Link href="/posts/the-shape-of-numbers">
            <InternalLink>Shape and Numbers</InternalLink>
          </Link>

          <Link href="/posts/an-intro-to-mathematics">
            <InternalLink>Whitehead&apos;s Introduction</InternalLink>
          </Link>

          <CandyStripe />
        </Navigation>
        {children}
      </ApplicationGrid>
    </RootGrid>
  );
};

export default Layout;
