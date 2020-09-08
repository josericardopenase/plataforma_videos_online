import React from 'react';
import VolverAtras from '../generalComponents/volverAtras';
import CourseProfesor from './courseProfesor';
import SearchBar from '../dashboard/searchbar';
import Apartado from './apartado';
import ApartadoList from './apartadoList';

export default function CourseSidebar(props) {

   const course = props.obj

  return (
    <div style={styles.sidebar}>
        <VolverAtras titulo={course.titulo}></VolverAtras>

        <CourseProfesor obj = {course.profesor}></CourseProfesor>

        <p className="mt-5 text-muted text-justify">{course.descripcion}</p>

        <SearchBar className="mt-4"></SearchBar>

        <ApartadoList obj = {course.apartados} onClick={props.onClick} id={props.id}></ApartadoList>
    </div>
  );
}

const styles= {
    sidebar : {
        position: "fixed",
        height: "100vh",
        backgroundColor: "white",
        width: "30rem",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem"

    },
    elementList : {
        listStyle : "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection : "column",
        alignItems: "center",
        width: "100%"
    }
}
