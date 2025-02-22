import {useNavigate} from "react-router-dom";


export function navigate(path) {
    const navigate = useNavigate();
    navigate(path);
}

