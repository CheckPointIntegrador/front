
// eslint-disable-next-lin
import { Component } from 'react';
import './style.scss';
import '../../App.scss'

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
                <p>Grupo do checkpoint integrador final do 3 bimestre
                do curso Certified Tech Developer da 
                Digital House </p>
            </div>


                <div className="cards">
                    {/* ALINE POLLIS */}
                    <articles >
                        <div className="caixa caixa-1">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Aline} alt="Foto Aline Pollis." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme ">
                                    <h4 className="profile-name">Aline Pollis</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/aline-pollis-beck/" target="_blank">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="http://github.com/lipollis" target="_blank">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* ESTHER PIMENTEL */}
                    <articles >
                        <div className="caixa caixa-2">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Esther} alt="Foto Esther Pimentel." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Esther Pimentel</h4>
                                    <h5 className="profile-social"><a href=" https://www.linkedin.com/in/esther-maria-pimentel-porto-4b351a74/" target="_blank">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/EstherPimentel" target="_blank">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* GISELLE PIASETZKI */}
                    <articles >
                        <div className="caixa caixa-3">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Giselle} alt="Foto Giselle Piasetzki." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Giselle Piasetzki</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/gisellepiasetzki/" target="_blank">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/GisellePiasetzki" target="_blank">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* LETÍCIA CARMO */}
                    <articles >
                        <div className="caixa caixa-4">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Leticia} alt="Foto Letícia Carmo." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Letícia Carmo</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/leticia-carmo-/" target="_blank">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/liacarmo" target="_blank">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* SILAS MEDEIROS */}
                    <articles >
                        <div className="caixa caixa-5">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Silas} alt="Foto Silas Medeiros." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Silas Medeiros</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/silas-medeiros-6b44a0213/" target="_blank">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/silasms" target="_blank">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>
                    {/* THAYS GAMA */}
                    <articles >
                        <div className="caixa caixa-6">
                            <div className="image-container-about col-lg-6 col-xm-12">
                                <div className="photo-wrap mb-5">
                                    <img className="profile-img" src={Thays} alt="Foto Thays Gama." />
                                </div>
                            </div>
                            <div className=" retangle">
                                <div className="col-lg-6 col-xm-12 aboutme">
                                    <h4 className="profile-name">Thays Gama</h4>
                                    <h5 className="profile-social"><a href="https://www.linkedin.com/in/thaysgama/" target="_blank">LinkedIn</a></h5>
                                    <h5 className="profile-social"><a href="https://github.com/thaysgama" target="_blank">GitHub</a></h5>
                                </div>
                            </div>
                        </div>
                    </articles>

                </div>

        </section>

    )
}

export default AboutUs;
