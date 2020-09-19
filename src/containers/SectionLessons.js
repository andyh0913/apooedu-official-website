import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Lesson from '../components/Lesson';
import Title from '../components/Title';
import '../App.css';

function SectionLessons(){
    return (
        <section id="section-lessons" className="vh-100">
            <Container className="justify-content-center">
                <Title text="課程介紹"></Title>
                <Row className="justify-content-center">
                    <Lesson></Lesson>
                    <Lesson></Lesson>
                    <Lesson></Lesson>
                </Row>
            </Container>
        </section>
    )
}

export default SectionLessons;