import logo from "../../image/giphyMoving1.gif"
import foto from "../../image/fotoMiguelPerfil.jpg"



export const About = () => {
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
                                I have been pursuing my professional passions, that to this day I am actively involved:
                                clinical psychology, performance psychology, and teaching, which I currently at Curtin University Malaysia.
                            </p>
                            
                        </div>

                    </div>
                </div>
                <div className="card-body bg-transparent" style={{ marginBottom: "50px", textAlign: "justify", paddingBottom: "40px" }}>
                    <div className="card-text">

                        <p className="card-text">
                            My work as a clinical and performance psychologist is the result of over a decade of experience learning from different references in the field, and from the opportunity to learn and work in multicultural settings.
                            My main goal as a therapist is to help people develop a deeper understanding of who they are, to be able to face their inner conflicts and challenges, and to help them develop healthier strategies so they can lead happier and meaningful lives.
                        </p>
                        <p className="text-center mt-4">
                            <strong>Are you ready to begin the process of change?</strong>
                        </p>

                    </div>
                </div>
                <div className="card-footer">

                </div>
            </div>
        </div>
    )
}