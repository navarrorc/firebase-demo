import * as React from 'react';
import {findDOMNode} from 'react-dom';
import * as API from '../api';

export default class Login extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
  }
  render() {
    if (this.props.user)      
      return <div className="row">
        <p>Hi {this.props.user.username}!</p>
        <p><button onClick={this.signout}> Sign Out</button></p>
      </div>
    
    return <div className="row">
      <p><input type="text" className="col-sm-12" placeholder="Username" ref="username"/></p>
      <p><input type="password" className="col-sm-12" placeholder="Password" ref="password"/></p>
      <p>
        <button onClick={this.signin}> Sign In </button>
        <button onClick={this.signup}> Sign Up </button>
      </p>
    </div>
  }
  signin = (evt) => this.sign('in', evt);
  signup = (evt) => this.sign('up', evt);
  sign = (name, evt) => {
    let username = findDOMNode<HTMLInputElement>(this.refs['username']).value,
        password = findDOMNode<HTMLInputElement>(this.refs['password']).value;
        
    API['sign' + name](username, password).then(data => this.props.setUser(data.user));
  }
  signout = evt => API.signout().then(data => this.props.setUser(null));
}