import React, { useState, useContext } from 'react';
import useApi from '../../../customHooks/useApi';
import apiAuth from '../../../api/apiAuth';
import AuthContext from '../../../auth/context';
import useApiCallback from '../../../customHooks/useApiCallback';
import storage from '../../../auth/storage';

export default function LoginNavigation() {

    const context = useContext(AuthContext)

    const fetchLogin = useApiCallback(apiAuth.getToken, (token) => { 
        context.logIn(token.token)
    })
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

   const login = () => {
        fetchLogin.request(user, password)
   } 
  return (
    <div className="w-100 d-flex justify-content-center" style={styles.bgGreen}>

        <div style={styles.bg} className="d-flex flex-column justify-content-center">
            <form className="p-5 bg-white text-center shadow" styles={styles.form} >
                <h1 className="text-grey mb-5">Autoescuel Eco</h1>
                <input type="text" style = {styles.input} placeholder="usuario..." onChange={text => setUser(text.target.value)} className="border-0"></input>
                <br></br>
                <input type="password"  style = {styles.input} placeholder="contraseña..." onChange={text => setPassword(text.target.value)} className="border-0 mt-3"></input>
                <br></br>
                { fetchLogin.error ? <p className="text-danger text-left mt-3">Usuario o contraseña incorrectos</p> : null }
                <div className="w-100 d-flex justify-content-center mt-3">
                    <button type="button" value="Entrar" style={styles.login} onClick={login}>Log in</button>
                </div>
            </form>
        </div>
    
    </div>
  );
}

const styles = {
    bg : {
        backgroundColor: "#63BB67",
        height: "100vh"
    },
    bgGreen: {
        backgroundColor: "#63BB67",
    },
    input: {
        backgroundColor: "#ededed",
        borderRadius: "10px",
        padding: "0.8rem 1rem",
        color: "grey"
    }, 
    login: {
        backgroundColor: "#63BB67",
        padding: "0.8rem 4rem",
        color: "white",
        border: "none",
        borderRadius: "10px"
    },
    form: {
        borderRadius: "30px !important"
    }
}
