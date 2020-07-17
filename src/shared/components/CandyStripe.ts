import styled from 'styled-components';

const CandyStripe = styled.div`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;

    height: 5rem;
    border-top: 1px solid black;

    margin-top: auto;

    background: repeating-linear-gradient(45deg, #1a1a1a 0 1px, #fbfbfb 0 15px);
  }
`;

export default CandyStripe;
