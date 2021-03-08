import styled from 'styled-components';

export const HeaderContainer = styled.div`
  /* width: 1130px; */
  width: 70.625rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2.5rem 0;

  color: ${props => props.color || '#FFF'};

  @media (max-width: 1180px) {
    /* width: 840px; */
    width: 52.5rem;
    padding: 2rem 0;
  }

  @media (max-width: 900px) {
    /* width: 560px; */
    width: 35rem;
    padding: 1.5rem 0;
  }

  @media (max-width: 600px) {
    /* width: 280px; */
    width: 17.5rem;
    padding: 1rem 0;

    flex-direction: column;
  }

  svg {
    path {
      fill: ${props => props.color || '#FFF'};
    }
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  place-content: center;
`;

export const HeaderTitle = styled.span`
  line-height: 2.5rem;
  font-size: 1.75rem;
  font-weight: 300;
  margin-left: 1rem;
`;

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  text-align: right;

  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    margin-right: 1rem;

    strong {
      font-weight: 500;
    }
  }

  @media (max-width: 600px) {
    padding-top: 0.5rem;
  }

  svg {
    cursor: pointer;
    path {
      fill: #33333333;
    }
  }
`;
