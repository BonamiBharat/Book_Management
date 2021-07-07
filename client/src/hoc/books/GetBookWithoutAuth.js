import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const LOAD_USERS = gql`
query getBooks{ 
getBooks{
    name
    author
    genre
    isbn
    status
  }
}`;

const GetBookWithoutAuth = (Component) => (props) => {

    return (
        <Query query={LOAD_USERS}>
            {({loading,data})=>(
              <Component
              loading={loading}
              BookDataWithoutAuth={data}
              {...props}
            />
            )}
         </Query>
     );
}

export default GetBookWithoutAuth;