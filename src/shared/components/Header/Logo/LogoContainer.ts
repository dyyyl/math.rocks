import styled from 'styled-components';

const LogoContainer = styled.section`
  height: 100%;
  width: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid black;

  @media screen and (min-width: 500px) {
    width: 20rem;
  }
`;

export default LogoContainer;
