import React, { Fragment } from 'react';
import InputBook from './InputBook';
import {SubmitDataBook} from '../hoc/books/SubmitBook';
import {Redirect} from 'react-router-dom';
import GetBook from '../hoc/books/GetBook';

class Book extends React.Component {

    constructor(props){
      super(props);

      this.state = {
          newItem: "",
          Backend_data: "",
          loading: true,
          loggedIn: false
        }

      
     const token = localStorage.getItem('LoginToken');

     if(token != null){
         this.state.loggedIn = true;
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
      // if(getBooksAll[0].status == false){
      //    this.setState({loggedIn: false});
      // }
   }

    OutputPrint(data){
   // console.log(data);
      if(data!=""){
         return <div className="books_entry_div"><ul className="books_entry_ul"> {data.map(({name,author,genre,isbn})=> <li className="books_entry_list">{`Name: ${name}, Author: ${author}, Genre: ${genre}, isbn: ${isbn}`}</li>)}</ul></div>;
      }else{
         return <Fragment/>
      }

      }

   render(){
      if(!this.state.loggedIn){
         return <Redirect to="/login" />
      }
      
      // this.forceUpdate();
      const {loading} = this.state;
      // console.log(this.state.loading);

      return (<><InputBook addItems={this.addItems}/> 
      {(loading)?"Loading...":this.OutputPrint(this.state.Backend_data)}</>);

   };
}

export default GetBook(SubmitDataBook(Book));