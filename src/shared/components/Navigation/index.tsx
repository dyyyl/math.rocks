import Link from 'next/link';
import React from 'react';

import CandyStripe from 'shared/components/CandyStripe';
import InternalLink from 'shared/components/InternalLink';

import NavigationContainer from './NavigationContainer';
import NavigationItem from './NavigationItem';
import NavigationItems from './NavigationItems';

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <NavigationItems>
        <NavigationItem>
          <Link href="/posts/the-shape-of-numbers">
            <InternalLink>Shape and Numbers</InternalLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/posts/an-intro-to-mathematics">
            <InternalLink>Whitehead&apos;s Introduction</InternalLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href="/posts/derivative-notation">
            <InternalLink>On Derivative Notation</InternalLink>
          </Link>
        </NavigationItem>
      </NavigationItems>
      <CandyStripe />
    </NavigationContainer>
  );
};

export default Navigation;
