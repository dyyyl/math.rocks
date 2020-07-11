import Link from 'next/link';
import React from 'react';

import LogoContainer from './LogoContainer';
import LogoLink from './LogoLink';

const Logo = () => {
  return (
    <LogoContainer>
      <Link href="/" passHref>
        <LogoLink>ふざけるな</LogoLink>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
