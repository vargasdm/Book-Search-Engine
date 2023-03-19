import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(
    $bookData: SearchBookInput!
  ) {username
      savedBooks {
      _id
      bookId
      authors
      description
       title
      link
      image
     }
   }
`;

// export const SAVE_BOOK = gql`
//  mutation saveBook($bookId: String!, $authors: [String!], $description: String!, $title: String!, $link: String, $image: String!) {saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, link: $link, image: $image) {
//       username
//       savedBooks {
//         _id
//         bookId
//         authors
//         description
//         title
//         link
//         image
//       }
//     }
//   }
// `;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;