import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NormalNavigation from './components/Navigation/NormalNavigation/normalNavigation';


import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNavigation from './components/Navigation/LoginNavigation/LoginNavigation';
import AuthContext from './auth/context';
import storage from './auth/storage';
import apiAuth from './api/apiAuth';
import LoadingIndicator from './components/Navigation/NormalNavigation/Components/generalComponents/loadingIndicator';

function App() {

  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [loading, setLoading] =useState(true)

  const restoreToken = async()=>{

    setLoading(true)

    const token = await storage.getToken()

    if(!token){
      setLoading(false)
      return
    }
    setToken(token)

    const user = await apiAuth.getUser()
    if(user.ok){
      setUser(user.data)
    }

    setLoading(false)
  }

  const logIn = async (token) => {

    setLoading(true)

    storage.storeToken(token)
    setToken(token)

    const user = await apiAuth.getUser()

    if(user.ok){
      setUser(user.data)
    }

    setLoading(false)

  }
  const logOut = async () => {
    storage.removeToken()
    setToken()
    setUser()
  }

  useEffect(() => {
    restoreToken()
  }, [])

    if(loading)
      return <LoadingIndicator fullSize={true}></LoadingIndicator>

    return (
      <AuthContext.Provider value={{logIn, logOut, user}}>
        <div className="App">
              { token && user ? <NormalNavigation></NormalNavigation> : <LoginNavigation></LoginNavigation>}
        </div>
      </AuthContext.Provider>
  );
}

export default App;
