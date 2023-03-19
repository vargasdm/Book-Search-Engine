import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
  mutation saveBook($bookId: String!, $authors: String!, $description: String!, $title: String!, $link: String!) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, link: $link) {
      token
      book {
        _id
        bookId
        authors
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      token
      User {
        _id
        book {
            bookId
        }
      }
    }
  }
`;