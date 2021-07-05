import { gql } from 'apollo-boost';

import { Mutation } from 'react-apollo';

const CREATE_USER_MUTATION = gql`
mutation($name: String, $author: String, $genre: String, $ISBN: String) {
    createBooks(booData:{name: $name, author: $author, genre: $genre, ISBN: $ISBN}) {
      id
      name
      author
      genre
      ISBN
    }
  }`;

export const SubmitDataBook = (Component) => (props)=>{
    return (
       <Mutation mutation={CREATE_USER_MUTATION}>
       {(createData) => (
          <Component 
         createData={({name,author,genre,IBSN})=>createData({variables:{name,author,genre,IBSN}})}
         {...props}
          />          
       )}
        </Mutation>
    )
 }
 