import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../image/lets-talk.gif"




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
            const response = await fetch("https://supreme-fortnight-pj77pw595qx43vq4-3001.app.github.dev/send_email", {
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
                <div>
                    <figure className="text-center mt-4">
                        <blockquote className="blockquote fs-4">
                            <p>Contact us</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                        Write to us for more information about our services. 
                        </figcaption>
                    </figure>
                </div>
                <div className="row d-flex">
                    <div className="col col-lg-6">
                        <div className="mt-3 ms-4">

                            <img src={image}
                                style={{ minWidth: "350px", height: "300px" }} />
                        </div>
                    </div>

                    <div className="col col-lg-6">
                        <div className=" form-control d-flex  mt-3 bg-transparent border-0 ">
                            <form onSubmit={handleSubmit}  >
                                <div>
                                    Full Name
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleEmail}
                                        // placeholder="Full Name"
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
                                        // placeholder="Email"
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
                                        // placeholder="How can I help you?"
                                        required
                                        className="form-control"
                                    />
                                </div>
                                <button type="submit" value="send" className="btn btn-outline-info "
                                >Send
                               
                                </button>
                            </form>
                        </div>
                    </div>

                    


                </div>

                {/* Mostrar el mensaje de estado después de enviar el formulario */}
                {statusMessage && <p>{statusMessage}</p>}
            </div>
        </div>

    )
}