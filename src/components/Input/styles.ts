import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  border-radius: 4px;

  width: 23rem;
  height: 3.75rem;

  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  position: relative;

  @media (max-width: 460px) {
    width: 18rem;
  }

  label {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;

    color: #fff;
    opacity: 0.5;
    cursor: pointer;
    opacity: 0.5;
  }

  input {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;

    color: #fff;
    background: transparent;
    border: 0;
    cursor: pointer;

    width: 100%;
    height: 1.5rem;

    &::placeholder {
      color: #fff;
      opacity: 0.5;
    }

    /* Fazendo o autocomplete do input ter a mesma cor do input */
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0.32) inset;
      -webkit-text-fill-color: #fff;
      transition: background-color 5000s ease-in-out 0s;
    }

    & > input {
      position: absolute;
      right: 10px;
      width: 85px;
      height: 36px;
      bottom: 25px;
      background: #ffffff;
      border-radius: 44px;
      font-family: Heebo;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #b22e6f;
      border: none;
      cursor: pointer;
    }
  }

  button {
    position: absolute;
    width: 85px;
    height: 36px;
    bottom: 12px;
    right: 12px;

    background: #fff;
    border-radius: 44px;

    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #b22e6f;
    border: none;
    cursor: pointer;
  }
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

  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;
  padding: 1rem;
  margin-top: 1.5rem;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  width: 240px;
  color: #ffffff;
`;
