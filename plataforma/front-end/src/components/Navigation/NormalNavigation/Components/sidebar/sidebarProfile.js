import React from 'react';

export default function SidebarProfile() {
  return (
    <div style={styles.container}>
        <img style={styles.icon} src = {'https://via.placeholder.com/350'} / >


    </div>
  );
}

const styles = {
    container : {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem"
    },
    icon: {
        borderRadius: "50%",
        backgroundColor: "white",
        height: "50px",
        width: "50px"
    }
}