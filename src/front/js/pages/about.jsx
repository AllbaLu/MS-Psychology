import logo from "../../image/giphyMoving1.gif"
import foto from "../../image/fotoMiguelPerfil.jpg"
import certificado from "../../image/certificadoRegPsych.jpg"
import declaracion from "../../image/DeclaracOrdPsych.jpg"
import registro from "../../image/regEuroPsy.jpg"
import { useState } from "react"
import "../../styles/about.css"






export const About = () => {
    const [modalImg, setModalImg] = useState(null);

    return (

        <div className="container h-100 bg-transparent ">
            <div>
                <figure className="text-center mt-4">
                    <blockquote className="blockquote fs-4">
                        <p>About </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Dr. Miguel Sá
                    </figcaption>
                </figure>
            </div>
            <div className="card-about mb-3 mt-5" style={{ maxWidth: "400rem" }}>
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={foto}
                            style={{ width: "300px", height: "250px", paddingLeft: "50px" }} />
                    </div>
                    <div className="col-md-8 bg-transparent ">
                        <div className="card-body " style={{ textAlign: "justify" }}>
                            <h5 className="card-title text-center">CLINICAL and PERFORMANCE | PSYCHOLOGIST and LECTURER</h5>
                            <p className="card-text" >
                                Born in Portugal in 1989, I am a clinical and performance psychologist,
                                having done my Bachelor in Psychological Sciences and my Master’s Degree in Clinical Psychology in ISPA University Institute, one of the oldest and most prestigious Psychology Schools in Portugal.
                            </p>
                            <p>
                                After graduating in 2013,
                                I have been pursuing my professional passions, in which I am actively involved:
                                clinical psychology, performance psychology, and teaching, which I currently do at Curtin University Malaysia.
                            </p>

                        </div>

                    </div>
                </div>
                <div className="card-body bg-transparent" style={{ marginBottom: "50px", textAlign: "justify", paddingBottom: "10px" }}>
                    <div className="card-text">

                        <p className="card-text">
                            My work as a clinical and performance psychologist is the result of over a decade of experience learning from different references in the field, and from the opportunity to learn and work in multicultural settings.
                            My main goal as a therapist is to help people develop a deeper understanding of who they are, to be able to face their inner conflicts and challenges, and to help them develop healthier strategies so they can lead happier and more meaningful lives.
                        </p>
                        <p className="text-center mt-4">
                            <strong>Are you ready to begin the process of change?</strong>
                        </p>

                    </div>
                </div>
                {/* professional */}

                <div className="row mb-4">
                    <div className="col-sm-6">
                        <div className="card-text">
                            <figure className="text-center mt-4">
                                <blockquote className="blockquote fs-4">
                                    <p>Academic profile:</p>
                                </blockquote>
                            </figure>
                            <div className="text">
                                <ul className="list-unstyled">
                                    <li>Masters in Clinical Psychology - ISPA (2013)</li>
                                    <li>Postgraduation in Sport and Health Psychology - ISPA (2016)</li>
                                    <li>PhD in Clinical Psychology - Curtin University (2025) - <strong>to be started</strong></li>
                                </ul>

                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card-text">
                            <figure className="text-center mt-4">
                                <blockquote className="blockquote fs-4">
                                    <p>Professional experience:</p>
                                </blockquote>
                            </figure>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="text ">
                                        <ul className="list-unstyled ms-5" style={{ alignItems: "center" }}>
                                            <li>Curtin University Malaysia   </li>
                                            <li>Telemedicine   </li>
                                            <li>MiguelSa Psychology    </li>
                                            <li>Universidade Europeia   </li>
                                            <li>SeaYourself    </li>
                                            <li>Hospital da Luz   </li>
                                            <li>Rafa Nadal Academy    </li>
                                            <li>Sporting CP   </li>
                                            <li>FC Famalicão   </li>
                                            <li>SL Benfica   </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <ul className="list-unstyled">
                                        <li>2024 -<strong> Present</strong></li>
                                        <li>2024 -<strong> Present</strong></li>
                                        <li>2017 -<strong> Present</strong></li>
                                        <li>2022-2025</li>
                                        <li>2024</li>
                                        <li>2023-2024</li>
                                        <li>2022-2023</li>
                                        <li>2021-2022</li>
                                        <li>2020-2021</li>
                                        <li>2013-2020</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                
                <div className="mb-5 d-flex justify-content-evenly" style={{ alignItems: "center", paddingBottom: "40px" }}>
                    <img src={certificado} onClick={() => setModalImg(certificado)} className="rounded float" alt="Certificado de registro como psicólogo clínico" style={{ width: "200px", height: "150px", border:"inset" }} />
                    <img src={declaracion} onClick={() => setModalImg(declaracion)} className="rounded float" alt="Declaracion Orden de Psicologos" style={{ width: "200px", height: "150px", border: "ridge" }} />
                    <img src={registro} onClick={() => setModalImg(registro)} className="rounded float" alt="Registro EuroPsy Psicologo" style={{ width: "200px", height: "150px", border: "groove" }} />

                </div>
                {modalImg && (
                    <div className="modal" onClick={() => setModalImg(null)}>
                        <img src={modalImg} alt="Imagen ampliada" />
                    </div>
                )}
                <div className="card-footer mb-5">

                </div>
            </div>
        </div>
    )
}