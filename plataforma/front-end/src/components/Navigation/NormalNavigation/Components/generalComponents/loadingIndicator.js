import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingIndicator() {
  return (

    <div className="d-flex h-100 flex-column justify-content-center">
        <div className="d-flex w-100 justify-content-center">
            <Spinner animation="border" variant="success"></Spinner>
        </div>

    </div>
  )

}
