import { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../../components/AboutUs';


const About = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <AboutUs />
    </>
  );
}
export default About;