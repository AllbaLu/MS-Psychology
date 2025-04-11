import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../image/agendar.png"
import { ScheduleSessions } from "../pages/scheduleSessions";




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
            const response = await fetch("https://crispy-zebra-69vv45xwxpxp25rg-3001.app.github.dev/send_email", {
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
    const handleEvent = (e) => {
        navigate("/ScheduleSessions")
    }

    return (
        <div>
            <div className="container h-100 ">
                <div>
                    <figure className="text-center mt-4">
                        <blockquote className="blockquote fs-4">
                            <p>Contact</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Write me for more information about services.
                        </figcaption>
                    </figure>
                </div>
                <div className="row d-flex justify-content-evenly ">
                    <div className="col-sm-6 col-md-5 col-lg-6">
                        <div className=" form-control d-flex  mt-1 bg-transparent border-0  " style={{ width: "250px" }} >
                            <form onSubmit={handleSubmit}  >
                                <div>
                                    Full Name
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleEmail}

                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    Email
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleEmail}

                                        required
                                        className="form-control"
                                    />
                                </div>
                                <div>
                                    How can I help you?
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleEmail}

                                        required
                                        className="form-control"
                                    />
                                </div>
                                <button type="submit" value="send" className="btn btn-outline-info ">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-6">
                        <div className="mt-5 ">

                            <div className="img"
                                style={{
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    width: "100%",
                                    minHeight: "40vh",
                                    display: "flex",

                                }}
                                
                            >
                                <div className="mx-2">

                                    <div className="text-white" style={{ textAlign: "justify" }}>
                                        To schedule your first appointment or to request a free phone consultation click here:
                                        <div className="text-center " style={{ mixBlendMode: "plus-lighter", border: "double" }}  >
                                            <button onClick={handleEvent} type="button" className="btn btn-link" >Schedule a Session</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Mostrar el mensaje de estado después de enviar el formulario */}
                {statusMessage && <p>{statusMessage}</p>}
            </div>
            <div className="mt-5 mb-5" style={{ mixBlendMode: "saturation" }}>
                <p className="mt-5 mb-5">Contact us</p>
                <p className="mt-5 mb-5">Contact us</p>

            </div>
        </div>

    )
}