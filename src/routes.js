import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Login from './Login';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route path="/Login" component={Login}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;