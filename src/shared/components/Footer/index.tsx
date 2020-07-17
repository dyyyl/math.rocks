import React from 'react';
import Latex from 'react-latex';

import ExternalLink from 'shared/components/ExternalLink';
import { Small } from 'shared/components/Typography';

const Footer = () => {
  return (
    <Small>
      Powered by{' '}
      <ExternalLink href="https://www.latex-project.org/">
        <Latex aria-label="LaTeX">$$\LaTeX$$</Latex>
      </ExternalLink>
    </Small>
  );
};

export default Footer;
