
import { Component } from 'react';
import './index.scss';
import Aline from "../../imgs/sobrenos/Aline.jpg";
import Esther from "../../imgs/sobrenos/Esther.jpeg";
import Giselle from "../../imgs/sobrenos/Giselle.jpeg";
import Leticia from "../../imgs/sobrenos/Leticia.jpg";
import Silas from "../../imgs/sobrenos/Silas.jpeg";
import Thays from "../../imgs/sobrenos/Thays.jpg";


const AboutUs = () => {

    return (
        <div id="aboutUs" className="container-about py-5">

            <div className="row">
                <div className="image-container col-lg-6 col-xm-12">

                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={Aline} alt="Minha foto." />
                    </div>

                </div>
                <div className="col-lg-6 col-xm-12 aboutme">
                    <h4 className="profile-name">Aline Pollis</h4>
                    <h5 className="profile-social">LinkedIn</h5>
                    <h5 className="profile-social">GitHub</h5>
                </div>
            </div>

    </div>
    )
}

export default AboutUs;