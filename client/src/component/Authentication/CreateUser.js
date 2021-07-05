import React, { Component } from 'react'
import { UserCreater } from '../../hoc/login/Regester';
import {Redirect} from 'react-router-dom';

class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state = {
             username : "",
             userid : "",
             pwd : "",
             description : "",
             status: false
        };
        

        this.addUserId = this.addUserId.bind(this);

        this.addUserName = this.addUserName.bind(this);

        this.addPwd = this.addPwd.bind(this);

        this.addDescription = this.addDescription.bind(this);

        this.CreateUser = this.CreateUser.bind(this);
    }

    addUserId(e){
      this.setState({
          userid: e.target.value
      });
    }
    addUserName(e){
        this.setState({
            username: e.target.value
        });
    }
    addPwd(e){
        this.setState({
            pwd: e.target.value
        });
    }
    addDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    CreateUser(event){
       event.preventDefault();
    //    console.log(this.state);
      this.props.createUser({
         username: this.state.username,
         userid: this.state.userid,
         pwd: this.state.pwd,
         description: this.state.description
      }).then((response)=>{
        if(response.data.createUser.status){
          this.setState({
              status: true
          })
        }

      });;
       
    }

    render() {
        if(this.state.status){
            return <Redirect to="/" />;
        }
        return (
            <div>
                 <form onSubmit={this.CreateUser}>
             <input type="text" value={this.state.username} onChange={this.addUserName} placeholder="user_name" required/>
             <input type="text" value={this.state.userid} onChange={this.addUserId} placeholder="user_id" required/>
             <input type="text" value={this.state.pwd} onChange={this.addPwd} placeholder="password" required/>
             <input type="text" value={this.state.description} onChange={this.addDescription} placeholder="description" required/>
             <button type="submit">logIn</button>
                </form>
            </div>
        )
    }
}

export default UserCreater(CreateUser);
