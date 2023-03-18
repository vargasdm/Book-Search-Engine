const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }
  
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  input SearchBookInput {
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
}

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!, authors: String!, description: String!, title: String!, link: String!): User
    removeBook(BookId: String!): User
  }
`;

module.exports = typeDefs;