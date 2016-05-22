require('../sass/styles.scss');
// declare var Firebase:any; // added so we can work with Firebase w/o typescript complaining


import * as React from 'react';
import {render} from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

import { MasterPage } from './components';

render(
  <Router history={browserHistory}>
      <Route path='/' component={MasterPage}>
      </Route>    
  </Router>,
  document.getElementById('app-container')
);

