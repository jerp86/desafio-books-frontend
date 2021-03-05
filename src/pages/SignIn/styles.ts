import styled from 'styled-components';

import background from '../../assets/backgroundLogin.png';
import logoImg from '../../assets/logo.svg';

export const Container = styled.div`
  background: url(${background}) no-repeat center;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;

  @media (max-width: 460px) {
    margin: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;

  margin-bottom: 48px;
`;

export const LogoImage = styled.div`
  background-image: url(${logoImg});
  width: 104px;
  height: 36px;
  margin-right: 16px;
`;

export const HeaderTitle = styled.span`
  color: #fff;
  line-height: 40px;
  font-size: 28px;
  font-weight: 300;
`;

export const Error = styled.div`
  &::before {
    content: '';
    position: absolute;
    left: 1rem;
    top: -0.5rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.4);
  }

  padding: 1rem;
  margin-top: 0.5rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;

  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  width: 240px;
  color: #fff;
`;
