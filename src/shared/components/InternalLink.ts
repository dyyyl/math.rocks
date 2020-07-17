import styled from 'styled-components';

const InternalLink = styled.a`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;

  height: 100%;
  width: 100%;

  cursor: pointer;

  border-right: 1px solid var(--primary);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  &:hover {
    color: var(--brand-secondary);
  }

  &:focus {
    color: var(--brand-secondary);
  }

  @media screen and (min-width: 500px) {
    height: 100%;

    padding: 1rem;

    border-right: 0;
    border-bottom: 1px solid var(--primary);
  }
`;

export default InternalLink;
