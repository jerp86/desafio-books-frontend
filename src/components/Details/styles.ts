import styled, { keyframes } from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { ImQuotesLeft } from 'react-icons/im';
import { shade } from 'polished';

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
  position: fixed;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
  color: #333;

  height: 100%;
  width: 100%;

  animation: ${appearFromLeft} 1.5s;

  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  /* overflow-y: auto; */
`;

export const CloseIcon = styled(IoMdClose)`
  color: rgba(0, 0, 0, 0.2);
`;

export const CloseIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  margin-right: 2rem;

  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0.5rem;
  }
`;

export const CloseIconField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48.063rem;
  height: 38rem;

  animation: ${appearFromLeft} 1.5s;

  @media screen and (max-width: 900px) {
    width: 85%;
  }

  @media screen and (max-width: 650px) {
    width: 70%;
    padding-top: 5rem;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  box-shadow: 0px 1rem 5rem rgba(0, 0, 0, 0.32);
  border-radius: 0.25rem;

  /* @media screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  } */

  @media screen and (max-width: 650px) {
    flex-direction: column;
    height: 100%;
    /* align-items: center;
    justify-content: center; */
    overflow-y: auto;
  }
`;

export const ImageBookContainer = styled.img`
  width: 60%;
  height: 100%;

  padding: 3rem;
  filter: drop-shadow(0px 0.75rem 1.125rem rgba(0, 0, 0, 0.3));

  @media screen and (max-width: 800px) {
    width: 50%;
    height: 90%;
    padding: 1.5rem;
  }

  @media screen and (max-width: 650px) {
    /* height: 80%;
    padding: 1rem; */
    display: none;
  }
`;

export const Content = styled.div`
  width: 50%;
  height: 100%;
  padding: 3rem;
  padding-left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media screen and (max-width: 650px) {
    width: 100%;
    /* max-height: 31.25rem; */

    padding: 0.5rem;
  }
`;

export const HeaderContent = styled.div`
  h2 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2.5rem;
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #ab2680;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 2rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3,
  h4 {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  h3 {
    line-height: 1.875rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #999;
  }
`;

export const Review = styled.div`
  margin-top: 2rem;
  overflow: auto;
  /* margin-right: -45px; */

  &::-webkit-scrollbar {
    width: 4px;
    height: 3rem;

    border-radius: 1.875rem;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ab2680;
    border-radius: 1.875rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  h3 {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.875rem;

    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 650px) {
    margin-right: 0;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  color: #999;

  span {
    width: 17.25rem;
    margin-left: 0.25rem;
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.25rem;
    padding-right: 0.813rem;
  }
`;

export const Quotes = styled(ImQuotesLeft)`
  margin-right: 0.313rem;
  font-size: 0.938rem;
  color: ${shade(0.4, '#999')};
`;
