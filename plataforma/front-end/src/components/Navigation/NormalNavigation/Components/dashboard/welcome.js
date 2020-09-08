import React from 'react';

export default function Welcome(props) {
  return (
    <div className={props.className} style={props.style}>
        <h1 style={styles.bienvenido}>Bienvenido, <span style = {styles.nombre}>Sergio Peña</span></h1>
    
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