import React from 'react';

import ExternalLinkContainer from './ExternalLinkContainer';

interface Props {
  children: React.ReactNode;
  href: string;
}

const ExternalLink = ({ children, href }: Props): JSX.Element => {
  return (
    <ExternalLinkContainer
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ExternalLinkContainer>
  );
};

export default ExternalLink;
