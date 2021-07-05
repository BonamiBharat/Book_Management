import { gql } from 'apollo-boost'

export const CREATE_USER_MUTATION = gql`

mutation($name: String, $author: String, $genre: String, $ISBN: String) {
    createBooks(booData:{name: $name, author: $author, genre: $genre, ISBN: $ISBN}) {
      id
      name
      author
      genre
      ISBN
    }
  }`;