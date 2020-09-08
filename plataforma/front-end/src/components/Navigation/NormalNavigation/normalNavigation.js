import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Sidebar from './Components/sidebar/sidebar';
import CoursePage from './Components/coursePage';


export default function NormalNavigation() {
  return (

    <div>
      <Sidebar></Sidebar>
        <Switch>

          <Route path="/curso/:id" component={CoursePage}>
          </Route>

          <Route path="/">
            <Dashboard></Dashboard>
          </Route>

          

        </Switch>
    </div>
  );
}
