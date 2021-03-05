import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;

  cursor: pointer;

  display: grid;
  grid-template-columns: 120px 160px;
  place-items: center;

  &:hover {
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }
`;

export const Book = styled.img`
  width: 100%;
  filter: drop-shadow(0px 6px 9px rgba(0, 0, 0, 0.15));
  padding: 16px;
`;

export const InfoBox = styled.div`
  width: 100%;
  padding: 8px;
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
    font-weight: 500px;
    font-size: 14px;
    line-height: 20px;
    color: #333;
  }

  span {
    color: #ab2680;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
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
    font-size: 12px;
    line-height: 20px;
  }
`;

export const ModalContent = styled.div`
  width: 500px;
  height: 500px;
  border: solid 5px green;
  position: absolute;
  z-index: 2999;
`;
