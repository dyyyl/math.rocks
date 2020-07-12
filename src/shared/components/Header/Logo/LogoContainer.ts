import styled from 'styled-components';

const LogoContainer = styled.section`
  height: 100%;
  width: max-content;

  padding: 0 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid black;

  @media screen and (min-width: 500px) {
    padding: 0 5rem;
  }

  @media screen and (min-width: 900px) {
    padding: 0 8.5rem;
  }
`;

export default LogoContainer;
