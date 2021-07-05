import React, { Component, Fragment } from 'react';
// import {gql} from '@apollo/client';
import {LOAD_USERS} from './queries.js';
import {nanoid} from 'nanoid';
import InputBook from './InputBook';
import { Query } from 'react-apollo';

import {SubmitDataBook} from '../hoc/books/SubmitBook';

import GetBook from '../hoc/books/GetBook';

class Book extends React.Component {

    constructor(props){
      super(props);

      this.state = {
          newItem: "",
          Backend_data: ""
        }

        this.addItems = this.addItems.bind(this);           
    }

    handleClick({name,author,genre,ISBN}) {

      console.log(name,author);

      this.props.createData({
        name: name,
        author: author,
        genre: genre,
        author: author
      });
 
      let data = this.props.BookData;
      if(data?.getBooksAll){
         this.setState({
            Backend_data: data.getBooksAll
         },()=>{
            console.log(this.state.Backend_data);
         })
      }
    }

   addItems(data){
      console.log(data);
     this.setState({
        newItem: data
     },()=>{
     this.handleClick(this.state.newItem);
     });
   }
    
    UpdateData(changeAvailability){
       changeAvailability({
          variable: {
             id: nanoid(),
             name: this.state.name,
             author: this.state.author,
             genre: this.state.genre,
             ISBN: this.state.ISBN
          }
       })
    }

   //  componentDidUpdate(prevProps, prevState, snapshot);

   // componentDidUpdate(pP,pS,sS){
   //    if(pS.Backend_data == this.state.Backend_data){
          
   //     }
   // }

    OutputPrint(data){
      //  console.log("updated");
      if(data!="")
         return <ul> {data.map(({id,name})=> <li id={id}>{`ID: ${id}, Name: ${name}`}</li>)}</ul>;
         else
         return <Fragment/>
    }

   //  componentDidMount()

   render(){
      return (
         <div>
         <InputBook addItems={this.addItems}/>
          {this.OutputPrint(this.state.Backend_data)}
         </div>
      )};
}

export default SubmitDataBook(GetBook(Book));