import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




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

    // Usa useEffect para actualizar el estado de montaje
    useEffect(() => {
        isMounted = true;
        return () => {
            // Cuando el componente se desmonte, cambia isMounted a false
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
            const response = await fetch("https://scaling-winner-jjrrq7p9p6vvhqgj5-3001.app.github.dev/send_email", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });


            if (response.ok) {
                const result = await response.json();
                setStatusMessage(result.status); // Mensaje de éxito desde el servidor
                navigate('/');
                alert('sent successfully')

            } else {

                const errorData = await response.json();
                setStatusMessage(errorData.status || 'Error al enviar el formulario'); // Mensaje de error específico o genérico
            }

        } catch (error) {
            setStatusMessage('Network or server connection error');
        }
    };


    return (
        <div>
            <div className="container ">
                <div className=" form-control d-flex justify-content-center mt-5 bg-transparent border-0 ">
            <div className="g-4">
                <img src="https://www.albertosoler.es/wp-content/uploads/2021/10/psicoterapia-online-videoconferencia.png"
                style={{minWidth: "200px", height: "250px" }} />
            </div>
                    <form onSubmit={handleSubmit}  >
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleEmail}
                                placeholder="Name"
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
                                placeholder="Message"
                                required
                                className="form-control"
                            />
                        </div>
                        <button type="submit" value="send">Send</button>
                    </form>
                </div>
            </div>

            {/* Mostrar el mensaje de estado después de enviar el formulario */}
            {statusMessage && <p>{statusMessage}</p>}
        </div>

    )
}