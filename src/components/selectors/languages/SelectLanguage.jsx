import './SelectLanguage.css';

const SelectLanguage = (props) => {
    return (
        <select className={"selectLanguage " + props.className} {...props}/>
    )
}

export default SelectLanguage;