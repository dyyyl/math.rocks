import styled from 'styled-components';

const ContentGrid = styled.main`
  max-height: calc(100vh - 9rem);
  padding: 1rem 5vmin;
  padding-bottom: 0;

  overflow-y: scroll;

  @media screen and (min-width: 500px) {
    max-height: 100vh;
  }
`;

export default ContentGrid;
