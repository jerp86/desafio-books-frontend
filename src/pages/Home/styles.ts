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
  grid-template-columns: repeat(1, 1120px);
  justify-content: center;
  align-content: flex-start;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 280px);
  place-content: center;

  padding-bottom: 1rem;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(3, 280px);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 280px);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 280px);
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: #333;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;

  span {
    margin-right: 8px;

    strong {
      font-weight: 500;
    }
  }

  button {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(51, 51, 51, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 8px;
  }
`;
