import styled from 'styled-components';

const LogoLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--primary);

  letter-spacing: 0.075rem;

  cursor: pointer;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--brand);
  }

  &:focus {
    text-decoration: underline;
    color: var(--brand);
  }

  @media screen and (min-width: 500px) {
    font-size: 2.5rem;
  }
`;

export default LogoLink;
