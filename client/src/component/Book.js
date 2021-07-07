import React, { Fragment } from 'react';
import InputBook from './InputBook';
import { SubmitDataBook } from '../hoc/books/SubmitBook';
import { Redirect } from 'react-router-dom';
import GetBookAll from '../hoc/books/GetBookAll';
import { connect } from 'react-redux';
import { sendRequestForCreate } from './redux/action/createDataAction';
import GetBookWithoutAuth from '../hoc/books/GetBookWithoutAuth';

const mapStateToProps = (state) => {
   return {
      changeNumber: state
   }
}

//Dispatcher 
const mapDispatchProps = (dispatch) => {
   return {
      // sendRequestForCreate,
      sendRequestForCreate2: data => dispatch(sendRequestForCreate(data))
   }
}

class Book extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         newItem: {},
         Backend_data: {},
         loading: true,
         loggedIn: false
      }


      const token = localStorage.getItem('LoginToken');

      if (token != null) {
         this.state.loggedIn = true;
      }

      this.addItems = this.addItems.bind(this);
   }

   handleClick({ name, author, genre, isbn }) {
      //  console.log({name,author,genre,isbn});
      this.props.sendRequestForCreate2({ createData: this.props.createData, name, author, genre, isbn });
   }


   addItems(data) {
      // console.log(data);
      this.setState({
         ...this.state,
         newItem: data
      }, () => {
         this.handleClick(this.state.newItem);
      });
   }

   componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      try {
         const { BookData: { getBooksAll } } = nextProps;
          const { BookDataWithoutAuth: { getBooks } } = nextProps;

         if (getBooksAll[0].status != false) {
            console.log('run get books all');
            this.setState({ ...this.state,BackendData: getBooksAll });
            this.setState({ ...this.state,loading: false })
         }
         if(getBooks[0].status != false){
             console.log('run without auth');
            this.setState({ ...this.state,BackendData: getBooks });
         }

      } catch (error) {
         console.log("backend discoennected");
      }
   }


   componentWillUnmount() {
      
   }

   OutputPrint(data) {
      // console.log(data);
      try {
         if (data != "") {
            return <div className="books_entry_div"><ul className="books_entry_ul"> {data.reverse().map(({ name, author, genre, isbn }, index) => <li id={index} className="books_entry_list">{`Name: ${name}, Author: ${author}, Genre: ${genre}, isbn: ${isbn}`}</li>)}</ul></div>;
         } else {
            return <Fragment />
         }
      } catch (error) {

      }
   }

   render() {
      if (!this.state.loggedIn) {
         return <Redirect to="/login" />
      }

      // this.forceUpdate();
      const { loading } = this.state;
      // console.log(this.state.loading);

      return (<><InputBook addItems={this.addItems} />
         {this.OutputPrint(this.state.BackendData)}</>);

   };
}

export default connect(mapStateToProps, mapDispatchProps)(GetBookWithoutAuth(GetBookAll(SubmitDataBook(Book))));