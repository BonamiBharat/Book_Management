import { gql } from 'apollo-boost';

import { Mutation } from 'react-apollo';

import {LOAD_USERS} from './GetBookAll';

const CREATE_USER_MUTATION = gql`
mutation($name: String, $author: String, $genre: String, $isbn: String!) {
    createBooks(booData:{name: $name, author: $author, genre: $genre, isbn: $isbn}) {
      name
      author
      genre
      isbn
      status
    }
  }`;


export const SubmitDataBook = (Component) => (props)=>{
    return (
       <Mutation mutation={CREATE_USER_MUTATION}>
       {(createData) => (
          <Component 
         createData={({name,author,genre,isbn},refetchQueryVariables)=>createData({variables:{name,author,genre,isbn},
          refetchQueries: [
            { query: LOAD_USERS, variables: refetchQueryVariables },
          ]})
        }
         {...props}
          />          
       )}
        </Mutation>
    )
 }
 