
import { Login } from "../component/Login";
import { Link, useNavigate } from "react-router-dom";





export const LoginPage = () => {
    const navigate = useNavigate();
    

    return(
        <div>

            <Login />
            
        </div>
    )
}