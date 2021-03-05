import React from 'react';

import { BookProps } from '../Card';

import {
  CloseIcon,
  CloseIconContainer,
  CloseIconField,
  Container,
  Content,
  DescriptionContainer,
  HeaderContent,
  ImageBookContainer,
  InfoContainer,
  InfoRow,
  ModalContainer,
  ModalWindow,
  Quotes,
  Review,
} from './styles';

interface DetailsProps {
  onClose(): void;
  data: BookProps;
}

const Details: React.FC<DetailsProps> = ({ onClose, data }: DetailsProps) => {
  return (
    <Container>
      <CloseIconContainer onClick={onClose}>
        <CloseIconField>
          <CloseIcon />
        </CloseIconField>
      </CloseIconContainer>

      <ModalWindow>
        <ModalContainer>
          <ImageBookContainer src={data.imageUrl} />

          <Content>
            <HeaderContent>
              <h2>{data.title}</h2>
              <span>{data.authors.join(', ')}</span>
            </HeaderContent>

            <InfoContainer>
              <InfoRow>
                <h3>informações</h3>
              </InfoRow>

              <InfoRow>
                <h4>Páginas</h4>
                <span>{data.pageCount} páginas</span>
              </InfoRow>

              <InfoRow>
                <h4>Editora</h4>
                <span>{data.publisher}</span>
              </InfoRow>

              <InfoRow>
                <h4>Publicação</h4>
                <span>{data.published}</span>
              </InfoRow>

              <InfoRow>
                <h4>Idioma</h4>
                <span>{data.language}</span>
              </InfoRow>

              <InfoRow>
                <h4>Título Original</h4>
                <span>{data.title}</span>
              </InfoRow>

              <InfoRow>
                <h4>ISBN-10</h4>
                <span>{data.isbn10}</span>
              </InfoRow>

              <InfoRow>
                <h4>ISBN-13</h4>
                <span>{data.isbn13}</span>
              </InfoRow>
            </InfoContainer>

            <Review>
              <h3>Resenha da editora</h3>
              <DescriptionContainer>
                <span>
                  <Quotes />
                  {data.description}
                </span>
              </DescriptionContainer>
            </Review>
          </Content>
        </ModalContainer>
      </ModalWindow>
    </Container>
  );
};

export default Details;
