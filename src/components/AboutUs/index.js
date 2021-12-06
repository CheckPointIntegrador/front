// eslint-disable-next-lin
import { Component } from 'react';
import './style.scss';
import '../../App.scss'
import DataAbout from './DataAboutUs';

import Aline    from "../../imgs/sobrenos/Aline.jpg";
import Esther   from "../../imgs/sobrenos/Esther.jpeg";
import Giselle  from "../../imgs/sobrenos/Giselle.jpeg";
import Leticia  from "../../imgs/sobrenos/Leticia.jpg";
import Silas    from "../../imgs/sobrenos/Silas.jpeg";
import Thays    from "../../imgs/sobrenos/Thays.jpg";

const AboutUs = () => {

    return (


        <section id="aboutUs" >

            <div className="text-about">
                <p>Grupo do checkpoint integrador final </p>
                <p>do 3 bimestre do curso Certified Tech </p>
                <p>Developer da Digital House </p>
            </div>


                <div className="cards">
                    {/* ALINE POLLIS */}
                    <articles >
                        <div className="caixa caixa-1">
                            <div className="image-container col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Aline} alt="Minha foto." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme ">
                                    <h4 className="profile-name">Aline Pollis</h4>
                                    <h5 className="profile-social"><a href="">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="http://github.com/lipollis">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* ESTHER PIMENTEL */}
                    <articles >
                        <div className="caixa caixa-2">
                            <div className="image-container col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Esther} alt="Minha foto." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Esther Pimentel</h4>
                                    <h5 className="profile-social"><a href="">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/EstherPimentel">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* GISELLE PIASETZKI */}
                    <articles >
                        <div className="caixa caixa-3">
                            <div className="image-container col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Giselle} alt="Minha foto." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Giselle Piasetzki</h4>
                                    <h5 className="profile-social"><a href="">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/GisellePiasetzki">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* LETÍCIA CARMO */}
                    <articles >
                        <div className="caixa caixa-4">
                            <div className="image-container col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Leticia} alt="Minha foto." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Letícia Carmo</h4>
                                    <h5 className="profile-social"><a href="">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/liacarmo">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* SILAS MEDEIROS */}
                    <articles >
                        <div className="caixa caixa-5">
                            <div className="image-container col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Silas} alt="Minha foto." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Silas Medeiros</h4>
                                    <h5 className="profile-social"><a href="">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/silasms">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* THAYS GAMA */}
                    <articles >
                        <div className="caixa caixa-6">
                            <div className="image-container col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Thays} alt="Minha foto." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Thays Gama</h4>
                                    <h5 className="profile-social"><a href="">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/thaysgama">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>

                </div>

        </section>

    )
}

export default AboutUs;