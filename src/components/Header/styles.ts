import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 1130px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 40px 0;

  color: ${props => props.color || '#FFF'};

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
  line-height: 40px;
  font-size: 28px;
  font-weight: 300;
  margin-left: 16px;
`;

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  text-align: right;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    margin-right: 16px;

    strong {
      font-weight: 500;
    }
  }

  svg {
    cursor: pointer;
    path {
      fill: #33333333;
    }
  }
`;
