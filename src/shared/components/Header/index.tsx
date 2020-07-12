import React from 'react';

import DateTime from './DateTime';
import HeaderContainer from './HeaderContainer';
import Logo from './Logo';

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Logo />

      <DateTime />
    </HeaderContainer>
  );
};

export default Header;
