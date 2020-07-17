import styled from 'styled-components';

const ApplicationGrid = styled.div`
  display: grid;
  grid-template-rows: auto max-content;
  grid-template-areas:
    'main'
    'navigation';

  @media screen and (min-width: 500px) {
    max-height: calc(100vh - 5rem);
    grid-template-columns: 20rem auto;
    grid-template-rows: 1fr;
    grid-template-areas: 'navigation main';
  }
`;

export default ApplicationGrid;
