interface Props{
    onMouseOver: () => void;
    onMouseLeave: () => void;
}

function NoButton({onMouseOver, onMouseLeave} : Props){
    return <button id = "no_button"onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        No 
    </button>
}

export default NoButton;