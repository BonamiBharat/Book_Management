import React from 'react';
import {Redirect} from 'react-router-dom';

class InputBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            author: "",
            genre: "",
            isbn: "",
            loggedIn: false
          };

          const token = localStorage.getItem('LoginToken');
    if(token != null){
        this.state.loggedIn = true;
    }
  

          this.addName = this.addName.bind(this);

          this.addAuthor = this.addAuthor.bind(this);

          this.addGenre = this.addGenre.bind(this);

          this.addisbn = this.addisbn.bind(this);

          this.addItem = this.addItem.bind(this);
        }

      addName(event){
        this.setState({
            name: event.target.value
        })
      }

      addAuthor(event){
        this.setState({
            author: event.target.value
        })
      }

      addGenre(event){
        this.setState({
            genre: event.target.value
        })
      }

      addisbn(event){
        this.setState({
            isbn: event.target.value
        })
      }

    addItem(event){
      event.preventDefault();
        this.props.addItems({name: this.state.name,author: this.state.author,genre: this.state.genre,isbn: this.state.isbn});
        // console.log(this.state);
        this.setState({
          name: "",
          author: "",
          genre: "",
          isbn: "",
        });
    }
     
    render(){
      if(!this.state.loggedIn){
        return <Redirect to="/login" />
     }

   return <>
   <form onSubmit={this.addItem}>
   <input type="text" value={this.state.name} onChange={this.addName} placeholder="name" required/>
   <input type="text" value={this.state.author} onChange={this.addAuthor} placeholder="author" />
   <input type="text" value={this.state.genre} onChange={this.addGenre} placeholder="genre" />
   <input type="text" value={this.state.isbn} onChange={this.addisbn} placeholder="isbn" />
   <button className="cssbutton" type="submit">Submit</button>
   </form>
   </>
};
}

export default InputBook;
