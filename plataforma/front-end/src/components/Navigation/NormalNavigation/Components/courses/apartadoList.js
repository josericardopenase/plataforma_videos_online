import React from 'react';
import Apartado from './apartado';

export default function ApartadoList(props) {

    const apartados = props.obj
  return (
      <div>
        {
            apartados.map((obj) => <Apartado obj={obj} onClick = {() => props.onClick(obj.id)} key={obj.id} activate = {obj.id === props.id}></Apartado> )
        }
        
    </div>
  );
}
