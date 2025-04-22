
import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";



export const PackageSelection = () => {

    const navigate = useNavigate();

    const handleSelection = (selectedPackage) => {
        window.location.href = `/reserva?sessionPackage=${selectedPackage}`;
      };
      

    return(
        <div className="conatiner ">

            <div className="flex flex-col  items-center  p-8 mt-5 " style={{justifyItems: "center"}}>
                <h1 className="text-2xl font-bold"> Schedule Sessions</h1>
                <button onClick={()=>{handleSelection("1")}} className="btn btn-outline-info px-4 py-2 rounded">
                    1 Session
                </button>
                <button onClick={() => {handleSelection("3")}} className="btn btn-outline-info ms-3 px-4 py-2 rounded">
                    3 Sessions
                </button>
            </div>
        </div>
        
    )
}