import React from 'react';

export default function SidebarProfile(props) {

  const styles = {
    container : {
        display: "flex",
        justifyContent: "center",
        marginTop: props.marginTop
    },
    icon: {
        borderRadius: "50%",
        backgroundColor: "white",
        height: "50px",
        width: "50px"
    }
}

  return (
    <div style={styles.container}>
        <img style={styles.icon} src = {'https://via.placeholder.com/350'} / >
        
        

    </div>
  );
}

