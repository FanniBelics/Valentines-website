interface Props{
    image: string
}

function Image({image}: Props){
    return <img src = {"src/assets/" + image} ></img>
}

export default Image;