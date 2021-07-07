import { gql } from 'apollo-boost';

import { Mutation } from 'react-apollo';

const CREDENTIAL_CHECK = gql`
mutation($userid: String, $pwd: String) {
    loginCheck(logindata:{userid: $userid, pwd: $pwd}) {
    status
    token
    }
  }`;

  const LOAD_USERS = gql`
query getBooks{ 
getBooks{
    name
    author
    genre
    isbn
    status
  }
}`;

export const Credential = (Component) => (props)=>{
    return (
       <Mutation mutation={CREDENTIAL_CHECK}>
       {(loginData) => (
          <Component 
          loginData={({userid,pwd},refetchQueryVariables)=>loginData({variables:{userid,pwd},
            refetchQueries: [
              { query: LOAD_USERS, variables: refetchQueryVariables },
            ]
          })}
         {...props}
          />          
       )}
        </Mutation>
    )
 }
 