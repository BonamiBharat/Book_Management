import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { client } from '../../App';

export default class Logout extends Component {
    constructor(props){
        super(props);
      localStorage.removeItem("LoginToken");
      
      client.resetStore();
    }

    render(){
    return <Redirect to='/login'/>
}
}
