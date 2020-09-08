import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NormalNavigation from './components/Navigation/NormalNavigation/normalNavigation';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [logged, setLogged] = useState(true)

  return (
    <div className="App">
          { logged ? <NormalNavigation></NormalNavigation> : null}
    </div>
  );
}

export default App;
