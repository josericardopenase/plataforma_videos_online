import React, { useState } from 'react';
import { findByLabelText } from '@testing-library/react';
import { Link } from 'react-router-dom';

export default function SidebarElement(props) {


  const styles = {
    element : {
        width: "100%",
        marginTop: "auto",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: props.enabled ? "#82C885" : "",
        padding: "0.6rem 0rem",
        margin: "1rem 0rem"
    },
    icon: {
        color: "white",
        width: "2rem",
        

    }

    }
  return (

      <li style={styles.element}>
        <Link to={props.locationPath} onClick = {() => props.onClick(props.id)}>
              <svg style={styles.icon} viewBox="0 0 16 16" className="bi bi-archive-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  {props.path}
              </svg>
          </Link>
      </li>
 
  );

}

