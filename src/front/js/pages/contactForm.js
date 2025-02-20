import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};


export const ContactForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    console.log(formData);

    const [statusMessage, setStatusMessage] = useState('');
    let isMounted = true;


    useEffect(() => {
        isMounted = true;
        return () => {

            isMounted = false;
        };
    }, []);

    const handleEmail = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch("https://special-giggle-pj77pw595qgw3rwq6-3001.app.github.dev/send_email", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });


            if (response.ok) {
                const result = await response.json();
                setStatusMessage(result.status);
                navigate('/');
                alert('sent successfully')

            } else {

                const errorData = await response.json();
                setStatusMessage(errorData.status || 'Error al enviar el formulario');
            }

        } catch (error) {
            setStatusMessage('Network or server connection error');
        }
    };


    return (
        <div>
            <div className="container ">
                <div className="row d-flex">
                    <div className="col-4 ">
                        <div className="mt-3 ms-4">
                            <p><i className="fa-solid fa-user"></i> MIGUEL SÁ</p>
                            <p><i className="fa-brands fa-square-whatsapp"></i> (+351) 918 079 311</p>
                            <p><i className="fa-solid fa-envelope"></i> miguelsapsychology@gmail.com</p>
                            <div className="d-flex gap-2 mt-2">
                                <button
                                    onClick={() => openLink("https://www.linkedin.com/in/miguel-barros-de-s%C3%A1-a336a8a8")}
                                    className="btn btn-outline-dark"
                                    aria-label="LinkedIn">
                                    <i className="fa-brands fa-linkedin"></i>
                                </button>
                                <button
                                    onClick={() => openLink("https://www.youtube.com/@miguelsapsychology")}
                                    className="btn btn-outline-dark"
                                    aria-label="YouTube">
                                    <i className="fa-brands fa-square-youtube"></i>
                                </button>
                                <button
                                    onClick={() => openLink("https://www.instagram.com/miguelsapsychology?igsh=MW91anhxYnVqNmtjaQ==")}
                                    className="btn btn-outline-dark"
                                    aria-label="Instagram">
                                    <i className="fa-brands fa-square-instagram"></i>
                                </button>
                            </div>

                            {/* <img src="https://www.albertosoler.es/wp-content/uploads/2021/10/psicoterapia-online-videoconferencia.png"
                                style={{ minWidth: "150px", height: "200px" }} /> */}
                        </div>
                        <div className="col col-md-8">
                            <div className=" form-control d-flex  mt-5 bg-transparent border-0 ">
                                <form onSubmit={handleSubmit}  >
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleEmail}
                                            placeholder="Full Name"
                                            required
                                            className="form-control"

                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleEmail}
                                            placeholder="Email"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleEmail}
                                            placeholder="How can I help you?"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <button type="submit" value="send" className="btn btn-outline-dark">Send</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>


                {/* Mostrar el mensaje de estado después de enviar el formulario */}
                {statusMessage && <p>{statusMessage}</p>}
            </div>
        </div>

            )
}