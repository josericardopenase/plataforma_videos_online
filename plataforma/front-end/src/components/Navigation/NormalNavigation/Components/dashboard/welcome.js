import React, { useContext } from 'react';
import AuthContext from '../../../../../auth/context';

export default function Welcome(props) {

  const auth = useContext(AuthContext)

  return (
    <div className={props.className} style={props.style}>
        <h1 style={styles.bienvenido}>Bienvenido, <span style = {styles.nombre}>{`${auth.user.first_name} ${auth.user.last_name}`}</span></h1>
    
    </div>
  );
}

const styles = {
    bienvenido : {
        fontWeight: 500
    },
    nombre: {
        fontWeight: 400,
        color: "#707070"
    }

}