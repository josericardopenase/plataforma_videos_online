import React, { useState, useContext } from 'react';
import AuthContext from '../../../../../auth/context';
import storage from '../../../../../auth/storage';

export default function DashboardProfile(props) {

  const [open, setOpen] = useState(false)
  const auth = useContext(AuthContext)



  const styles = {
    container : {
        display: "flex",
        justifyContent: "center",
        marginTop: props.marginTop,
        position: "relative"
    },
    icon: {
        borderRadius: "50%",
        backgroundColor: "white",
        height: "50px",
        width: "50px"
    },
    dropdown : {
      position: "absolute",
      right: 0,
      backgroundColor: "white",
      width: "200px",
      marginTop: "4.2rem",
      borderRadius: "10px"
    }

}

  return (
    <div style={styles.container}>
        <img style={styles.icon} src = {'https://via.placeholder.com/350'} onClick= {() => setOpen(!open)} / >
        
        { 
        open ?
        <div style={styles.dropdown} className="shadow">
         <div className="notificacion pl-5 pr-5 pt-3 pb-3" onClick={() => {auth.logOut()}}>
           Log out
          </div> 
        </div>
        :
        null
        }
        

    </div>
  );
}

