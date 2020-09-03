import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Sidebar from './Components/sidebar/sidebar';

export default function NormalNavigation() {
  return (

    <div>
      <Sidebar></Sidebar>
        <Switch>
          
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>

        </Switch>
    </div>
  );
}
