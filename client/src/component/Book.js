import React, { Fragment } from 'react';
// import {gql} from '@apollo/client';
// import {LOAD_USERS} from './queries.js';
// import {nanoid} from 'nanoid';
import InputBook from './InputBook';
// import { Query } from 'react-apollo';

import {SubmitDataBook} from '../hoc/books/SubmitBook';

import GetBook from '../hoc/books/GetBook';

class Book extends React.Component {

    constructor(props){
      super(props);

      this.state = {
          newItem: "",
          Backend_data: "",
          loading: true
        }

        this.addItems = this.addItems.bind(this);   
   }

    handleClick({name,author,genre,isbn}) {
       console.log({name,author,genre,isbn});
      this.props.createData({
        name,
        author,
        genre,
        author,
        isbn
      });

    }


   addItems(data){
      // console.log(data);
     this.setState({
        newItem: data
     },()=>{
     this.handleClick(this.state.newItem);
     });
   }

   componentWillReceiveProps(nextProps){
      console.log("next Props: ",nextProps);
      const { BookData:{getBooksAll} } = nextProps;
      
      if(getBooksAll.length){
          this.setState({Backend_data:getBooksAll}, 
          () => this.setState({loading: false})
          );
      }
   }
  

    OutputPrint(data){
   // console.log(data);
      if(data!=""){
         return <ul> {data.map(({name,author,genre,isbn})=> <li>{`Name: ${name}, Author: ${author}, Genre: ${genre}, isbn: ${isbn}`}</li>)}</ul>;
      }else{
         return <Fragment/>
      }

      }

   render(){
      const {loading} = this.state;
      console.log(this.state.loading);

      return (<><InputBook addItems={this.addItems}/> 
      {(loading)?"Loading...":this.OutputPrint(this.state.Backend_data)}</>);

   };
}

export default GetBook(SubmitDataBook(Book));