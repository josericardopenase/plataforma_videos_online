import React, { useEffect } from 'react';
import Course from './course';
import useApi from '../../../../../customHooks/useApi';
import apiCursos from '../../../../../api/apiCursos';
import LoadingIndicator from '../generalComponents/loadingIndicator';

export default function CoursesList(props) {

 
  const cursos = useApi(apiCursos.getListCursos)

  useEffect( () => {
    cursos.request()
  }, [])

  if(cursos.error){
    return null
  }
  return (

    <div className={props.className} style={props.style}>
      <h3 style={{color: " rgb(112, 112, 112)"}}>Cursos</h3>
      
      
      {
        !cursos.loading ? 
          <div className="row  align-items-stretch m-0 p-0">
            {cursos.data.map((obj) => <Course obj = {obj} style={{marginTop: "2rem"}}></Course>)}
          </div>
        :
        <div className="w-100 mt-5">
          <LoadingIndicator/>
        </div>
      }
     
    </div>
  );
}
