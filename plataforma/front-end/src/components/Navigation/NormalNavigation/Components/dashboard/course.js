import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Course(props) {

  const obj = props.obj

  return (


        <div className="col-xl-3 col-lg-6 p-0"  style={props.style}>
            <Link to={`/curso/${obj.id}`} className="text-decoration-none">
                <div className="card mr-5 h-100" style={styles.card}>
                    
                    <img className="card-img-top" src = {'https://via.placeholder.com/350x150'} style={{borderRadius: "0.9rem"}} />
                    
                    <div className="card-body h-100 d-flex flex-column justify-content-between">
                        
                        <div>
                            <h5 style={styles.title} className="mb-3">{obj.titulo}</h5>
                            <p style={styles.descripcion}>{obj.descripcion}</p>
                        </div>


                        <div className="justify-content-between d-flex">
                            <div className="d-flex">
                                <img src = {'https://via.placeholder.com/150'} className="rounded-circle" style={styles.profile.image}></img>
                                <p className="m-0 justify-content-center d-flex flex-column ml-2 text-muted">{obj.profesor.nombre}</p>
                            </div>

                            <p className="m-0 justify-content-center d-flex flex-column" style={styles.duration}>{obj.duracion} min</p>
                        </div>

                    </div>
                </div>
            </Link>
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
            width: "35px",
            height: "35px"
        }
    },
    duration : {
        color: "#63BB67",
        fontWeight: 600,
    }
}