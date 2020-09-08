import React, { useState } from 'react';
import NotificationSingle from './notificationSingle';

export default function NotificationContainer() {

    const [hover, setHover] = useState(false)

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
            overflow: hover ? "auto" : "hidden"
        }
    }

  return (
    <div style = {styles.container}  className = "shadow" onMouseEnter={ () => setHover(true)} onMouseLeave={() => setHover(false)}>
        <NotificationSingle></NotificationSingle>
        <NotificationSingle></NotificationSingle>
        <NotificationSingle></NotificationSingle>
        <NotificationSingle></NotificationSingle>
        <NotificationSingle></NotificationSingle>
        <NotificationSingle></NotificationSingle>
        
    </div>
  );
}


