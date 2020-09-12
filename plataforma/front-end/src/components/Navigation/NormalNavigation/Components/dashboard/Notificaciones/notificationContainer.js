import React, { useState, useEffect } from 'react';
import NotificationSingle from './notificationSingle';
import useApi from '../../../../../../customHooks/useApi';
import apiNotifications from '../../../../../../api/apiNotifications';
import LoadingIndicator from '../../generalComponents/loadingIndicator';

export default function NotificationContainer() {

    const [hover, setHover] = useState(false)
    const notificaciones = useApi(apiNotifications.getNotifications)

    useEffect(() => {
      notificaciones.request()
    }, [])

    const styles = {
        container : {
            backgroundColor: "white",
            position: "absolute",
            width: "400px",
            maxHeight: "500px",
            margin: "auto",
            right: 0, 
            marginTop : "1rem",
            zIndex: "100",
            borderRadius: "10px 0px 10px 10px",
            overflowY: hover ? "auto" : "hidden",
            overfloX: "hidden"

        }
    }

  return (
    <div style = {styles.container}  className = "shadow " onMouseEnter={ () => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div style={{backgroundColor: "rgb(99, 187, 103)", padding: "1rem", position: "fixed", width: "400px", borderRadius: "10px 10px 0px 0px"}}>
          <p className="m-0 text-white">Notificaciones</p>
        </div>

        <div className="mt-5">
        { !notificaciones.loading ? notificaciones.data.map((obj) => <NotificationSingle obj = {obj}></NotificationSingle> ) : <LoadingIndicator></LoadingIndicator>} 
        </div>
    </div>
  );
}


