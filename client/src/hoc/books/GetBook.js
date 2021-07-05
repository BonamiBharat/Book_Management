import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const LOAD_USERS = gql`
query getBooksAll{ 
getBooksAll{
    id
    name
    author
    genre
    ISBN
  }
}`;

const GetBook = (Component) => (props) => {

    return (
        <Query query={LOAD_USERS}>
            {({loading,data})=>(
              <Component
              loading={loading}
              BookData={data}
              {...props}
            />
            )}
         </Query>
     );
}

export default GetBook;