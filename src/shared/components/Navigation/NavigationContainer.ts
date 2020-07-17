import styled from 'styled-components';

const NavigationContainer = styled.nav`
  height: 4rem;

  grid-area: navigation;

  display: flex;

  overflow-x: scroll;
  overflow-y: hidden;
  border-top: 1px solid var(--primary);

  @media screen and (min-width: 500px) {
    height: 100%;
    position: sticky;
    border-top: 0;
    border-right: 1px solid var(--primary);

    flex-direction: column;

    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default NavigationContainer;
