import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import Header from '../../components/Header';
import Card, { BookProps } from '../../components/Card';

import { List, Container, Pagination } from './styles';
import api from '../../services/api';

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [page, setPage] = useState(1);
  const [pageLength, setPageLenght] = useState(0);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const response = await api.get('books', {
          params: { page, amount: '12', category: 'biographies' },
        });

        setPageLenght(Math.ceil(response.data.totalPages));
        setBooks(response.data.data);
      } catch (error) {
        alert(
          'Erro de conexão.\nNão conseguimos realizar seu login, tente novamente mais tarde.',
        );
      }
    };

    loadBooks();
  }, [page]);

  return (
    <Container>
      <Header color="#333333" />

      <List>
        {books.map(book => (
          <Card
            key={book.id}
            id={book.id}
            imageUrl={book.imageUrl}
            title={book.title}
            authors={book.authors}
            pageCount={book.pageCount}
            published={book.published}
            publisher={book.publisher}
          />
        ))}
      </List>

      <Pagination>
        <span>
          Página <strong>{page}</strong> de <strong>{pageLength}</strong>
        </span>

        <button
          type="button"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
          disabled={!(page - 1)}
        >
          <FiChevronLeft />
        </button>

        <button
          type="button"
          onClick={() => setPage(page + 1)}
          disabled={page === pageLength}
        >
          <FiChevronRight />
        </button>
      </Pagination>
    </Container>
  );
};

export default Home;
