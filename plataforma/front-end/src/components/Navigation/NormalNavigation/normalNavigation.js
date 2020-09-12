import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Sidebar from './Components/sidebar/sidebar';
import CoursePage from './Components/coursePage';
import storage from '../../../auth/storage';


export default function NormalNavigation() {

  console.log(storage.getToken())

  return (

    <div>
      <Sidebar></Sidebar>
        <Switch>

          <Route path="/app/curso/:id" component={CoursePage}>
          </Route>

          <Route path="/app">
            <Dashboard></Dashboard>
          </Route>

          

        </Switch>
    </div>
  );
}
