interface Props{
    onClick: () => void;
}

function YesButton({onClick} : Props){
    return <button id="yes_button" onClick={onClick}>Yes</button>
}

export default YesButton;