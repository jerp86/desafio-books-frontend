import styled from 'styled-components';

import bg1 from '../../assets/homeBackground.png';
import bg2 from '../../assets/homeBackground2.png';

export const Container = styled.div`
  height: 100vh;

  background-image: url(${bg1}), url(${bg2});
  background-size: cover;
  background-blend-mode: darken;
  transform: matrix(1, 0, 0, 1, 0, 0);

  display: grid;
  grid-gap: 1rem;
  /* grid-template-columns: repeat(1, 111.25); */
  grid-template-columns: repeat(1, 70rem);
  justify-content: center;
  align-content: flex-start;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 1rem;
  /* grid-template-columns: repeat(4, 280px); */
  grid-template-columns: repeat(4, 17.5rem);
  place-content: center;

  padding-bottom: 1rem;

  @media (max-width: 1180px) {
    /* grid-template-columns: repeat(3, 280px); */
    grid-template-columns: repeat(3, 17.5rem);
  }

  @media (max-width: 900px) {
    /* grid-template-columns: repeat(2, 280px); */
    grid-template-columns: repeat(2, 17.5rem);
  }

  @media (max-width: 600px) {
    /* grid-template-columns: repeat(1, 280px); */
    grid-template-columns: repeat(1, 17.5rem);
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: #333;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.25;

  span {
    margin-right: 0.5rem;

    strong {
      font-weight: 500;
    }
  }

  button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    border: 1px solid rgba(51, 51, 51, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 0.5rem;
  }
`;
