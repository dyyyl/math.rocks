import styled from 'styled-components';

const NavigationItems = styled.ul`
  height: 4rem;

  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;

  @media screen and (min-width: 500px) {
    height: 100%;

    flex-direction: column;

    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default NavigationItems;
