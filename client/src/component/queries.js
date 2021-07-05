import { gql } from 'apollo-boost';

export const LOAD_USERS = gql`
query($name: String, $author: String, $genre: String, $ISBN: String) {
  getBooks(booData:{name: $name, author: $author, genre: $genre, ISBN: $ISBN}) {
    id
    name
    author
    genre
    ISBN
  }
}`;
