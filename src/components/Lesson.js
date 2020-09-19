import React from 'react';
import {Row, Col} from 'react-bootstrap';

function Lesson() {

    return (
        <Col md={3} className="lesson d-flex flex-column align-items-center">
            <div className="lesson-circle"></div>
            <div className="lesson-rec"></div>
        </Col>
    )
}

export default Lesson;