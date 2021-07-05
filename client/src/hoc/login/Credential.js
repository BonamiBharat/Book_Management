import { gql } from 'apollo-boost';

import { Mutation } from 'react-apollo';

const CREDENTIAL_CHECK = gql`
mutation($userid: String, $pwd: String) {
    loginCheck(logindata:{userid: $userid, pwd: $pwd}) {
    status
    token
    }
  }`;

export const Credential = (Component) => (props)=>{
    return (
       <Mutation mutation={CREDENTIAL_CHECK}>
       {(loginData) => (
          <Component 
          loginData={({userid,pwd})=>loginData({variables:{userid,pwd}})}
         {...props}
          />          
       )}
        </Mutation>
    )
 }
 