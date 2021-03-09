import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0.375rem 1.5rem rgba(84, 16, 95, 0.13);
  border-radius: 0.25rem;

  cursor: pointer;

  display: grid;
  grid-template-columns: 7.5rem 10rem;
  place-items: center;

  animation: ${appearFromLeft} 1.5s;

  &:hover {
    box-shadow: 0px 1rem 5rem rgba(84, 16, 95, 0.32);
  }
`;

export const Book = styled.img`
  width: 100%;
  filter: drop-shadow(0px 0.375rem 0.563rem rgba(0, 0, 0, 0.15));
  padding: 1rem;
`;

export const InfoBox = styled.div`
  width: 100%;
  padding: 0.5rem;
  padding-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: stretch;
`;

export const BookTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #333;
  }

  span {
    color: #ab2680;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  span {
    color: #999;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`;

export const ModalContent = styled.div`
  width: 31.25rem;
  height: 31.25rem;
  border: solid 0.313rem green;
  position: absolute;
  z-index: 2999;
`;
