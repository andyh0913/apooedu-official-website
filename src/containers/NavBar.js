import React from 'react';
import {Link} from 'react-scroll';
import {Container, Navbar, Nav} from 'react-bootstrap';
// import '../App.css';


function NavBar() {

    return (
        <Navbar id="navbar" fixed="top" className="justify-content-center">
            <Nav >
                <Nav.Item><Link className="nav-link bg-std-orange" activeClass="active" to="section-top" spy={true} smooth={true} duration={500}>首頁</Link></Nav.Item>
                <Nav.Item><Link className="nav-link bg-std-light-green" activeClass="active" to="section-about" spy={true} smooth={true} duration={500}>關於我們</Link></Nav.Item>
                <Nav.Item><Link className="nav-link bg-std-red" activeClass="active" to="section-lessons" spy={true} smooth={true} duration={500}>課程</Link></Nav.Item>
                <Nav.Item><Link className="nav-link bg-std-dark-green" activeClass="active" to="section-contact" spy={true} smooth={true} duration={500}>聯絡我們</Link></Nav.Item>        
            </Nav>
        </Navbar>
    )
}

export default NavBar;