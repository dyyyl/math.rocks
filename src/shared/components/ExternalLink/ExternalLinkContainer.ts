import styled from 'styled-components';

const ExternalLinkContainer = styled.a`
  color: var(--primary);
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

export default ExternalLinkContainer;
