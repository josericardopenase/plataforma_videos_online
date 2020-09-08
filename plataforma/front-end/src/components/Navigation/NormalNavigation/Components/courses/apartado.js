import React from 'react';

export default function Apartado(props) {

  const apartado = props.obj
  return (
    <div onClick={props.onClick} className="p-3 mt-3" style = {{borderRadius: "0.5rem", backgroundColor: props.activate ? "#f5f5f5" : "", cursor: "pointer"}}>
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-center">

                <h3 className="m-0" styles = {styles.order}>
                    {apartado.orden}
                </h3>

            </div>

            <div className="text-left d-flex flex-column justify-content-center">
                <h5 className="m-0">
                    {apartado.titulo}
                </h5>
                <p className="m-0">
                    3 min
                </p>
            </div>

            <div className="d-flex flex-column justify-content-center">
                <div style = {styles.circle}>

                </div>
            </div>
        </div>
    </div>
  );
}

const styles = {
    circle : {
        width: "30px",
        height: "30px",
        backgroundColor: "green",
        borderRadius : "50%"
    },
    order : {
        fontWeight: "bold"
    }

}
