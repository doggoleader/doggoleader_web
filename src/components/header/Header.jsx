import './Header.css';
import HeaderButton from "../buttons/headerButton/HeaderButton";
import SelectLanguage from "../selectors/languages/SelectLanguage";
import {useNavigate} from "react-router-dom";
import Gallery from "../../pages/gallery/Gallery";
import logo from "../../assets/imagies/logo_512x512.png";

const Header = () => {

    const navigate = useNavigate();

    const toGallery = () => {
        navigate('/gallery');
    }

    const toPortfolio = () => {
        navigate('/portfolio');
    }

    const toMain = () => {
        navigate('/');
    }

    return (
        <div className={"header"}>
            <img className="logo" onClick={toMain} src={logo}  alt={"logo.png"} />
            <div className="flexcont">
                <HeaderButton className={"btn"} onClick={toGallery}>Gallery</HeaderButton>
                <HeaderButton className={"btn"} onClick={toPortfolio}>Portfolio</HeaderButton>
                <select className={"select"}>
                    <option value={"ru"}>Russian (Русский)</option>
                    <option value={"en"}>English (English)</option>
                </select>
            </div>
        </div>
    )
}

export default Header;