import React from 'react';
import NavBar from './containers/NavBar';
import SectionTop from './containers/SectionTop';
import SectionAbout from './containers/SectionAbout';
import SectionLessons from './containers/SectionLessons';
import SectionContact from './containers/SectionContact';
import './App.css';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <SectionTop></SectionTop>
      <SectionAbout></SectionAbout>
      <SectionLessons></SectionLessons>
      <SectionContact></SectionContact>
    </>
  );
}

export default App;
