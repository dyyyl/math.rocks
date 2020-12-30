import styled from 'styled-components';

interface StyleProps {
  centered?: boolean;
}

const Copy = styled.p<StyleProps>`
  font-size: 1.6rem;
  font-weight: 400;

  color: var(--primary);

  letter-spacing: 0.05rem;
  line-height: 2.75rem;
  text-align: left;

  @media screen and (min-width: 1000px) {
    ${({ centered }) =>
      centered ? 'text-align: center;' : 'text-align: left;'}
  }
`;

export default Copy;
