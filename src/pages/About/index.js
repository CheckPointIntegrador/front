import { Component } from 'react';
// import { Link } from 'react-router-dom';
import BannerHome from '../../components/AboutUs/BannerAbout'
import AboutUs from '../../components/AboutUs';


const About = () => {
  return (
    <>
      {/* <Link to="/">Home</Link> */}
      <BannerHome />
      <AboutUs />
    </>
  );
}
export default About;