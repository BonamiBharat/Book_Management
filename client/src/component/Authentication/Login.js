import React, { Component } from 'react';
import { Credential } from '../../hoc/login/Credential';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loggedIn: false
        }

        // const token = localStorage.getItem('LoginToken');
        // if(token != null){
        //     this.state.loggedIn = true;
        // }

        this.addUser = this.addUser.bind(this);

        this.addPwd = this.addPwd.bind(this);

        this.LoginUser = this.LoginUser.bind(this);

    }

    addUser(event) {
        this.setState({
            username: event.target.value,
        })
    }


    addPwd(event) {
        this.setState({
            password: event.target.value,
        })
    }

    LoginUser(event) {

        event.preventDefault();

        this.props.loginData({
            userid: this.state.username,
            pwd: this.state.password
        }).then((response) => {
            console.log(response);
            if (response.data.loginCheck.status) {
                //   console.log(response.data.loginCheck.token);
                let logintoken = response.data.loginCheck.token;
                //   console.log(token);
                localStorage.setItem('LoginToken', logintoken);
                this.setState({
                    loggedIn: true
                });
            }
        });

    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.LoginUser}>
                    <input type="text" value={this.state.username} onChange={this.addUser} placeholder="user_id" required />
                    <input type="text" value={this.state.password} onChange={this.addPwd} placeholder="pwd" required />
                    <button type="submit">logIn</button>
                </form>
            </div>
        )
    }
}

export default Credential(Login);
