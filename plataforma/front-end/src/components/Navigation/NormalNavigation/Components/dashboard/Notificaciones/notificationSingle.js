import React from 'react';

export default function NotificationSingle(props) {
  return (
    <div className="w-100 pl-3 pr-3 pt-3 pb-1 notificacion">
        <h5 style={{fontSize: "16px"}}>{props.obj.titulo}</h5>
        <p className="text-muted">{props.obj.contenido}</p>
    </div>
  );
}
