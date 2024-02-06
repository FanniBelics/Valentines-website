const titles = ["Will you be my Valentine?", "No, No, No Please!", "I love you!"]

interface Props{
    state: number;
}


function Header({state = 0} : Props){
    return <h1>{titles[state]}</h1>
}

export default Header;