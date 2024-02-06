interface Props{
    image: string
}

function Image({image}: Props){
    return <img src = {image} ></img>
}

export default Image;