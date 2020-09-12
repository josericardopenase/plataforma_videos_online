import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingIndicator(props) {
  return (

    <div className="d-flex flex-column justify-content-center" style={{height: props.fullSize ?  "100vh" : "100%"}}>
        <div className="d-flex w-100 justify-content-center">
            <Spinner animation="border" variant="success"></Spinner>
        </div>

    </div>
  )

}
