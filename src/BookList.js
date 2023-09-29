// src/components/BookList.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
const b=[ 
  { coverImg: '/hihihi.png'}
]
const books = [
  {
    title: 'NEW-12 Rules for Life: An Antidote to Chaos',
    author: 'Jordan Peterson',
    coverImg: '/41zGXwxH-ZL.jpg',
  },
  {
    title: ' Critical Responses ',
    author: 'Jordan Peterson',
    coverImg: '/716M0udarJL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'Beyond Order',
    author: 'Jordan Peterson',
    coverImg: '/71EYOo8+bfL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    title: 'The Different Jordan Peterson:',
    author: 'Jordan Peterson',
    coverImg: '/61v5S326HBL._AC_UF1000,1000_QL80_.jpg',
  },
];

const BookList = () => {
  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={book.coverImg} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
