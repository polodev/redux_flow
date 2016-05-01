import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import * as auth from 'utils/auth';

import {
  ProgramsView
} from 'views';

import {
  LoginView
} from 'components';


function checkAuth(location, replace){
  // if(auth.loggedIn()){
    // replace({ nextPathname: location.location.pathname }, 'transparency')
  // }
}

function requireAuth(location, replace){
  // if(!auth.loggedIn()){
     // replace({ nextPathname: location.location.pathname }, '/')
  // }
}

export default (store) => (
  <Route component={CoreLayout}>
    <IndexRoute component={LoginView} />
    <Route
      path="/"
      onEnter={checkAuth}
      component={LoginView} />

    <Route
      onEnter={requireAuth}
      component={TransparencyView}
      path='/transparency/donations/:id'
      />
    <Route
      onEnter={requireAuth}
      component={ProgramsView}
      path='/transparency/programs'
      />
  </Route>
);
