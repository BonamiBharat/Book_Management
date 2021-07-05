import React from 'react';

class InputBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            author: "",
            genre: "",
            ISBN: "",
          };

          this.addName = this.addName.bind(this);

          this.addAuthor = this.addAuthor.bind(this);

          this.addGenre = this.addGenre.bind(this);

          this.addISBM = this.addISBM.bind(this);

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

      addISBM(event){
        this.setState({
            ISBN: event.target.value
        })
      }

    addItem(event){
      event.preventDefault();
        this.props.addItems(this.state);
        // console.log(this.state);
    }
     
    render(){
   return <>
   <form onSubmit={this.addItem}>
   <input type="text" value={this.state.name} onChange={this.addName} placeholder="name" required/>
   <input type="text" value={this.state.author} onChange={this.addAuthor} placeholder="author" />
   <input type="text" value={this.state.genre} onChange={this.addGenre} placeholder="genre" />
   <input type="text" value={this.state.ISBN} onChange={this.addISBM} placeholder="ISBN" />
   <button type="submit">Submit</button>
   </form>
   </>
};
}

export default InputBook;
