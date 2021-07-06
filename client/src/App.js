import Book from './component/Book';
import {
  ApolloClient, InMemoryCache,ApolloLink,concat
} from 'apollo-boost'
import { createUploadLink, } from 'apollo-upload-client'
// import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo'; 
import Login from './component/Authentication/Login';
import Logout from './component/Authentication/Logout';

import CreateUser from './component/Authentication/CreateUser';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Counter from './component/redux/counter';



const auth = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const userObj = localStorage.getItem('LoginToken');

  operation.setContext({
    headers: {
      'x-token': userObj || '1212'
    },
  })

  return forward(operation);
})




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
  link: concat(auth,httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
     <Router>
     <div>
       <div className="navbar">
       <ul className="list">
         <li>
           <Link to='/' className="header-content">DashBoard</Link>
           </li>
         <li>
           <Link to='/login' className="header-content">Login In</Link>
           </li>
         <li>
           <Link to='/logout' className="header-content">Login Out</Link>
           </li>
         <li>
           <Link to='/createUser' className="header-content">Create User</Link>
           </li>
           <li>
           <Link to='/counter' className="header-content">Counter</Link>
           </li>
         </ul>
       </div>
         <Switch>
             <Route exact path='/' component={Book}></Route>
             <Route exact path='/login' component={Login}></Route>
             <Route exact path='/logout' component={Logout}></Route>
             <Route exact path='/createUser' component={CreateUser}></Route>
             <Route exact path='/counter' component={Counter}></Route>
           </Switch>
       </div>
   </Router>
  </ApolloProvider>
  );
}

export default App;
