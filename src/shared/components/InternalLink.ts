import styled from 'styled-components';

const InternalLink = styled.a`
  font-size: 1.3rem;
  font-weight: 500;

  text-align: center;
  /* place-self: center; */

  cursor: pointer;

  border-right: 1px solid var(--primary);

  &:hover {
    color: var(--brand-secondary);
  }

  &:focus {
    color: var(--brand-secondary);
  }

  @media screen and (min-width: 500px) {
    height: max-content;

    padding: 1rem;

    border-right: 0;
    border-bottom: 1px solid var(--primary);
  }
`;

export default InternalLink;
