import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GoBack(){

    const location = useLocation()
    console.log('location go back:', location);
    

    const goBackUrl = useRef(location.state?.from);
    const navigate = useNavigate()

    const handleClick = evt => {
        navigate(goBackUrl.current, { replace: false })
    }

    return (
        <nav>
            <button type="button" onClick={handleClick}>Go back</button>
        </nav>
    )
}