import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Title from '../components/Title';
import '../App.css';

function SectionAbout(){
    return (
        <section id="section-about" className="vh-100">
            <Container>
                <Title text="關於我們"></Title>
                <Row className="justify-content-center">
                    <Col md={8} className="about">
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionAbout;