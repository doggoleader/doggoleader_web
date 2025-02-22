import './Header.css';
import HeaderButton from "../buttons/headerButton/HeaderButton";
import SelectLanguage from "../selectors/languages/SelectLanguage";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const toGallery = () => {
        navigate('/gallery');
    }

    const toPortfolio = () => {
        navigate('/portfolio');
    }

    return (
        <div>
            <h1 className={"name"}>DoggoLeader website</h1>
            <HeaderButton onClick={toGallery}>Gallery</HeaderButton>
            <HeaderButton onClick={toPortfolio}>Portfolio</HeaderButton>
            <SelectLanguage>Language</SelectLanguage>
        </div>
    )
}

export default Header;