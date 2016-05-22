declare var USER:any; // Global variable set in views/index.ejs

import * as React from 'react';

import Login from './Login';

export class MasterPage extends React.Component<any,any> {
  state = { user: USER};
  constructor(props:any) {
    super(props);
  }
  render() {
    // React.cloneElement(this.props.children, { user: this.state.user })    
    let border = {border: '1px solid black'}    
    return <div>
      <div className='row'>
        <div className='col-sm-3' style={border}>
          <h1>Wiki</h1>
          <Login user={this.state.user} setUser={this.setUser} />
          
          PageList
        </div>
        <div className='col-sm-9' style={border}>
          <h1>Main</h1>
        </div>
      </div>
    </div>
  }
  setUser = (user) => this.setState({ user:user })
}