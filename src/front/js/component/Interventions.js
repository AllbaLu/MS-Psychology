import React from "react";
import { useNavigate } from "react-router-dom";


export const Interventions = () => {
    return (
        <div className="container bg-light">

            <div className="d-flex justify-content-center mt-5 ">
                <h1 className="mb-5">Interventions</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card">
                        <img src="https://cgei-ud.org/images/psicosensum/products/producto_5006_.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Clinical Psychology</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://psiquiatriapsicologia-dexeus.com/IMAGES_12/unnamed.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sport Psychology</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://elplacerdelalectura.com/wp-content/uploads/2024/04/af33ae05-23b3-483a-a086-d693a175d8d9.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Psychology Classes</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content longer card with supporting text below as a natural lead.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}