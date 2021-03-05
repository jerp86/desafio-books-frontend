import styled, { keyframes } from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { ImQuotesLeft } from 'react-icons/im';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
  color: #333;

  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  animation: ${appearFromLeft} 1.5s;

  @media (max-width: 800px) {
    flex-direction: column;
  }
  overflow-y: auto;
`;

export const CloseIcon = styled(IoMdClose)`
  color: rgba(0, 0, 0, 0.2);
`;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-right: 32px;

  @media (max-width: 800px) {
    position: absolute;
    top: 10px;
  }
`;

export const CloseIconField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;

  &:hover {
    background: #ffffffaf;

    svg {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const ModalWindow = styled.div`
  height: 608px;
  margin-bottom: 60px;
  width: 769px;
  height: 608px;

  @media (max-width: 800px) {
    display: flex;
    position: absolute;

    height: 100%;
    width: 288px;
    top: 50px;
    margin-bottom: 50px;
    max-height: 860px;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
`;

export const ImageBookContainer = styled.img`
  width: 60%;
  height: 100%;

  padding: 48px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

  @media (max-width: 800px) {
    width: 100%;
    max-height: 350px;
    padding: 24px;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  padding: 48px;
  padding-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 800px) {
    width: 100%;
    max-height: 500px;

    padding: 25px;
  }
`;

export const HeaderContent = styled.div`
  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 40px;
  }

  span:first-of-type {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #ab2680;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 32px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3,
  h4 {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
  }

  h3 {
    line-height: 30px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #999;
  }
`;

export const Review = styled.div`
  margin-top: 32px;
  overflow: auto;
  margin-right: -45px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 48px;

    border-radius: 30px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ab2680;
    border-radius: 30px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  h3 {
    font-weight: 500;
    font-size: 12px;
    line-height: 30px;

    text-transform: uppercase;
    margin-bottom: 8px;
  }

  @media (max-width: 800px) {
    margin-right: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  color: #999;

  span {
    width: 276px;
    margin-left: 4px;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    padding-right: 13px;
  }
`;

export const Quotes = styled(ImQuotesLeft)`
  margin-right: 5px;
  font-size: 15px;
  color: ${shade(0.4, '#999')};
`;
