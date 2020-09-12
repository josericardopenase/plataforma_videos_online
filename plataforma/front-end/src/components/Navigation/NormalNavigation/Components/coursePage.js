import React, { useEffect, useState } from 'react';
import GeneralStyles from './generalStyles';
import CourseSidebar from './courses/courseSidebar';
import useApiCallback from '../../../../customHooks/useApiCallback';
import apiCursos from '../../../../api/apiCursos';
import CourseApartado from './courses/courseApartado';
import apiClient from '../../../../api/apiClient';

export default function CoursePage(props) {

  const id = props.match.params.id


  const [idApartado, setIdApartado] = useState(null)

  const cursos = useApiCallback(apiCursos.getSingleCurso, (data) => data.apartados[0] !== undefined ? setIdApartado(data.apartados[0].id) : setIdApartado(null))

  useEffect(() => {
    cursos.request(id)

  }, [])

  const changeApartados = (num) => {

    const apartados = cursos.data.apartados

    const indexApartadoActual = apartados.findIndex(element => element.id === idApartado )

    if(indexApartadoActual + num < 0 || indexApartadoActual + num > apartados.length - 1)
      return

    setIdApartado(cursos.data.apartados[indexApartadoActual + num].id)

    

  }

  const SecureSetApartadoId = (id) =>{

    if(idApartado === id)
      return

    setIdApartado(id)
  }

  return (
    <div style={GeneralStyles.noPaddingContainer}>
      <div className="d-flex">

          {
            !cursos.loading ? <CourseSidebar id={idApartado} obj = {cursos.data} onClick={SecureSetApartadoId} ></CourseSidebar> : null
          } 
          {
            !cursos.loading && idApartado !== null ? <CourseApartado id = {idApartado} changeApartados={changeApartados} first =  {cursos.data.apartados[0].id} last = {cursos.data.apartados[cursos.data.apartados.length - 1].id}></CourseApartado> : null
          }


      </div>
    </div>
  );
}
