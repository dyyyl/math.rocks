import React from 'react';

import HeaderContainer from './HeaderContainer';
import Logo from './Logo';

const Header = (): JSX.Element => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
