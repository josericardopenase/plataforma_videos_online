import React from 'react';

export default function CourseProfesor({obj}) {

  return (
    <div className="d-flex mt-5">
        <img src = {'https://via.placeholder.com/150'} className="rounded-circle" style={styles.profile.image}></img>
        <div className="ml-4 justify-content-center d-flex flex-column text-left">
            <div>
                <p className="m-0 text-muted">Profesor</p>
                <h5 className="m-0 text-dark ">{obj.nombre}</h5>
            </div>
        </div>
    </div>

  );
}

const styles = {
    card: {
        border: '2px rgba(255, 255, 255, 0) solid',
        borderRadius: "1rem",
    },
    title : {
        fontWeight: 600
    },
    descripcion: {
        color: "#A4A5A5"
    },
    profile: {
        image : {
            width: "50px",
            height: "50px"
        }
    },
    duration : {
        color: "#63BB67",
        fontWeight: 600,
    }
}