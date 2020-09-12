import React, { useState, useEffect } from 'react';
import NotificationContainer from './Notificaciones/notificationContainer';
import apiNotifications from '../../../../../api/apiNotifications';
import useApi from '../../../../../customHooks/useApi';
import useApiCallback from '../../../../../customHooks/useApiCallback';

export default function Notification(props) {

  const [open, setOpen] = useState(false)
  const [numeroNotificaciones, setNumeroNotificaciones] = useState(0)
  const fetchNotificaciones = useApiCallback(apiNotifications.getNonReadNotifications, (data) => setNumeroNotificaciones(data))

  useEffect(() => {
    fetchNotificaciones.request()
  }, [])

  return (

      <div style={props.style} className="d-flex flex-column justify-content-center" onClick={() =>  {setOpen(!open); setNumeroNotificaciones(0); }}>
          <div className="position-relative">
            <svg  width="1.35em" height="1.35em" viewBox="0 0 16 16" class="bi bi-bell-fill" fill="#A7ACA9" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg>

            {/* circulo de nueva notificacion */}

            {numeroNotificaciones > 0 ? <div style ={styles.circle}></div> : null}

            { open ? <NotificationContainer></NotificationContainer> : null}
          </div>


      </div>

    
  );
}

const styles = {
  circle:  {
    backgroundColor: "red",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    position: "absolute",
    top: "0",
    right: "0",
    border: "2px white solid"
  }
}