import React, { useState, useEffect } from 'react';
import CourseSidebar from './courseSidebar';
import useApi from '../../../../../customHooks/useApi';
import apiCursos from '../../../../../api/apiCursos';
import LoadingIndicator from '../generalComponents/loadingIndicator';

export default function CourseApartado(props) {


  const apartado = useApi(apiCursos.getApartado)

  useEffect(() => {
    apartado.request(props.id)
  }, [props.id])
 
    

  return (
    <div style = {styles.container}>

        {
        apartado.loading ? 
        
        <LoadingIndicator/> 
        
        :

        (<div className="w-100 d-flex justify-content-center">
            <div className="flex-column w-100">

                {/* NEXT VIDEO PREV VIDEO CONTROLS */}
                <div className="row justify-content-center mb-5">
                   <div  style={styles.controles1} className={`col-6 text-center ${props.id === props.first ? "transparent" : ""}`} onClick={() => props.changeApartados(-1)}>
                        Video Anterior
                     </div> 
                   <div  style={styles.controles2} className={`col-6 text-center ${props.id === props.last ? "transparent" : ""}`} onClick={() => props.changeApartados(1)}>
                        Video siguiente
                    </div> 

                </div>

                <video className="w-100" controls/>

                <p className="mt-5 text-muted text-justify"> {apartado.data.descripcion}</p>            
            </div>
        </div>
        )
        }
    </div>
  );
}

const styles = {
    container : {
        marginLeft: "30rem",
        padding: "0rem 7rem",
        width: "100%",
        height: "100vh"
    },
    controles1 : {
        padding: "0.8rem 0rem",
        fontSize: "20px",
        color: "white",
        backgroundColor: "#FF7B7B",
        borderRadius: "0px 0px 0px 20px",
        cursor: "pointer"
    },
    controles2 : {
        padding: "0.8rem 0rem",
        fontSize: "20px",
        color: "white",
        backgroundColor: "#6eBB67",
        borderRadius: "0px 0px 20px 0px",
        cursor: "pointer"
    },
    controlesTransparentes: {
        backgroundColor: "#F5F5F5",
        color: "transparent"
    }


}