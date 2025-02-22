import "./HeaderButton.css";

const HeaderButton = (props) => {
    return (
        <button {...props} className={"headerBtn " + props.className}/>
    )
}

export default HeaderButton;