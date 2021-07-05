import React, { Component } from 'react'

export default class CreateUser extends Component {
    constructor(props){
        super(props);
        this.state({
             username : "",
             userid : "",
             pwd : "",
             description : "" 
        });

        this.addUserName = this.addUserName.bind(this);

        this.addUserId = this.addUserId.bind(this);

        this.addPwd = this.addPwd.bind(this);

        this.addDescription = this.addDescription.bind(this);

        this.CreateUser = this.CreateUser.bind(this);
    }

    // addUserId(){
    //   this.setState
    // }
    // addUserName(){

    // }
    // addPwd(){

    // }
    // addDescription(){

    // }
    // CreateUser(){

    // }

    render() {
        return (
            <div>
                 <form onSubmit={this.CreateUser}>
             <input type="text" value={this.state.username} onChange={this.addUserName} placeholder="user_name" required/>
             <input type="text" value={this.state.userid} onChange={this.addUserId} placeholder="user_id" required/>
             <input type="text" value={this.state.pwd} onChange={this.addPwd} placeholder="password" required/>
             <input type="text" value={this.state.dexcription} onChange={this.addDescription} placeholder="description" required/>
             <button type="submit">logIn</button>
                </form>
            </div>
        )
    }
}
