import React, { useState } from 'react';
import api from '../../services/api';
import Details from '../Details';

import { Book, InfoBox, Container, BookTitle, BookInfo } from './styles';

export interface BookProps {
  id: string;
  title: string;
  authors: string[];
  pageCount: number;
  imageUrl: string;
  publisher: string;
  published: number;

  language?: string;
  isbn10?: string;
  isbn13?: string;
  description?: string;
}

const Card: React.FC<BookProps> = ({
  id,
  imageUrl,
  title,
  authors,
  pageCount,
  published,
  publisher,
}: BookProps) => {
  const [visible, setVisible] = useState(false);
  const [book, setBook] = useState<BookProps>({} as BookProps);

  const getBook = async (idBook: string) => {
    try {
      const response = await api.get(`books/${idBook}`);

      setBook(response.data);
      setVisible(true);
    } catch (error) {
      alert(`Ocorreu um erro ao montar o cartao do livro!\n${error.message}`);
    }
  };

  return (
    <>
      {visible && <Details onClose={() => setVisible(false)} data={book} />}

      <Container onClick={() => getBook(id)}>
        <Book src={imageUrl} alt={`Capa do livro ${title}`} />

        <InfoBox>
          <BookTitle>
            <strong>{title}</strong>
            <span>{authors.join(', ')}</span>
          </BookTitle>

          <BookInfo>
            <span>{pageCount} páginas</span>
            <span>{publisher}</span>
            <span>Publicado em {published}</span>
          </BookInfo>
        </InfoBox>
      </Container>
    </>
  );
};

export default Card;
