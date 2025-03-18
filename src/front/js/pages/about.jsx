import logo from "../../image/giphyMoving1.gif"
import foto from "../../image/fotoMiguelPrueba.jpg"



export const About = () => {
    return (

        <div className="container h-100 bg-transparent ">
            <div>
                    <figure className="text-center mt-4">
                        <blockquote className="blockquote fs-4">
                            <p>About Therapist</p>
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
                        style={{width:"250px", height: "200px"}} />
                    </div>
                    <div className="col-md-8 bg-transparent ">
                        <div className="card-body ">
                            <h5 className="card-title">CLINICAL and PERFORMANCE | PSYCHOLOGIST and LECTURER</h5>
                            <p className="card-text" style={{textAlign: "justify"}}>Born in Portugal in 1989, he has a Bachelor in Psychological Sciences ans a Master’s Degree in Clinical Psychology from ISPA, one of the most prestigious Psychology Schools in Portugal.
                            After graduating in 2013, he has always been involved in his three major passions: clinical psychology, performance psychology, and education, all of which he is actively engaged in. </p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                        
                    </div>
                </div>
                <div className="card-body bg-transparent" style={{ marginBottom: "50px", textAlign: "justify"}}>
                    <div className="card-text">
                                
                        <p className="card-text">Has worked in both organizational settings, as a practitioner - independently and in several settings, and has gradually been more involved in education, both as lecturer and an investigator.
                        Works currently in Curtin University Malaysia and works independently as a clinical psychologist.</p>
                                
                    </div>
                </div>
                       <div className="card-footer"></div>
            </div>
        </div>
    )
}