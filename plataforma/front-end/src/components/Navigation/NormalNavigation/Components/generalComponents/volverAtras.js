import React from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import { motion } from 'framer-motion';


function VolverAtras(props) {
    return (

        <motion.div className="d-flex">
            
            <svg style={{cursor: "pointer"}} onClick={props.history.goBack}  width="3.5rem" height="3.5rem" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>            
            </svg>
       
            <h3 className="text-left ml-4 d-flex flex-column justify-content-center">{props.titulo}</h3>
        </motion.div>
    )
}

export default withRouter(VolverAtras)
