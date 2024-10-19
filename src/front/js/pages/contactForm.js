import React, {useState} from "react";




export const ContactForm = () => {

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });

    const handleEmail = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await fetch("https://ominous-space-succotash-7v77p5jwjx5q2x45w-3001.app.github.dev/api/send_email", formData)
           
            setStatusMessage(response.data.status);

        } catch (error) {
            if(error.response){
                setStatusMessage(error.response.data.status)
            }else{
                setStatusMessage('Network or server connection error')
            }
        }
        
    }
    

    return(
        <div>
            <div className="container">
                <div className="d-flex justify-content-center mt-5">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleEmail}
                            placeholder="Name"
                            required
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
                            />
                        </div>
                        <div>
                            <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleEmail}
                            placeholder="Message"
                            required
                            />
                        </div>    
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>

      {/* Mostrar el mensaje de estado después de enviar el formulario */}
      {/*{statusMessage && <p>{statusMessage}</p>}*/}
    </div>
       
    )
}