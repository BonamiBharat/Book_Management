import { gql } from 'apollo-boost';

import { Mutation } from 'react-apollo';

const CREATE_USER = gql`
mutation($name:String, $userid: String, $pwd: String, $description: String) {
    createUser(userdata:{name: $name, userid: $userid, pwd: $pwd, description: $description}) {
    status
    }
  }`;

export const UserCreater = (Component) => (props)=>{
    return (
       <Mutation mutation={CREATE_USER}>
       {(createUser) => (
          <Component 
          createUser={({username,userid,pwd,description})=>createUser({variables:{username,userid,pwd,description}})}
         {...props}
          />          
       )}
        </Mutation>
    )
 }
 