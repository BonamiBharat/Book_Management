import Book from './component/Book';
import {
  ApolloClient, InMemoryCache,
} from 'apollo-boost'
import { createUploadLink } from 'apollo-upload-client'
// import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo'; 
import Login from './component/Authentication/Login';
import Logout from './component/Authentication/Logout';

import CreateUser from './component/Authentication/CreateUser';
// import Logi from './component/Authentication/Login';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

let serverLink =  "http://localhost:4000/";

const httpLink = createUploadLink({ uri: serverLink })

// const defaultOptions = {
//   watchQuery: {
//     fetchPolicy: 'network-only',
//     errorPolicy: 'ignore',
//   },
//   query: {
//     fetchPolicy: 'network-only',
//     errorPolicy: 'all',
//   },
// }

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
     <Router>
     <div>
       <ul>
         <li>
           <Link to='/'>DashBoard</Link>
           </li>
         <li>
           <Link to='/login'>Login In</Link>
           </li>
         <li>
           <Link to='/logout'>Login Out</Link>
           </li>
         <li>
           <Link to='/createUser'>Create User</Link>
           </li>
         </ul>
         <Switch>
             <Route exact path='/' component={Book}></Route>
             <Route exact path='/login' component={Login}></Route>
             <Route exact path='/logout' component={Logout}></Route>
             <Route exact path='/createUser' component={CreateUser}></Route>
           </Switch>
       </div>
   </Router>
  </ApolloProvider>
  );
}

export default App;
