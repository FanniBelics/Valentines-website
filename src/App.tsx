import { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import NoButton from "./components/NoButton";
import YesButton from "./components/YesButton";

const happy = "happy_fox.jpg"
const idle = "idle_fox.jpg"
const sad = "sad_fox.jpg"


function App(){
  const [foxImage, setFoxImage] = useState(idle);
  const [title, setTitle] = useState(0)

  const handleNoButtonHover = () => {
    setFoxImage(sad);
    setTitle(1);
    setTimeout(() => {moveNoButton()}, 220);
  }

  const handleNoButtonLeave = () => {
    setFoxImage(idle);
    setTitle(0);
  }

  const handleYesButtonOnclick = () =>{
    setFoxImage(happy);
    setTitle(2);
    document.getElementById("no_button")!.style.visibility = "hidden";
  }

  const moveNoButton = () => {
    let noButton = document.getElementById("no_button")!;
    let maxWidth = screen.width - 200;
    let maxHeight = screen.height - 200;

    let newHeight = Math.floor(Math.random() * (maxHeight - 200)) + 200;
    let newWidth = Math.floor(Math.random() * (maxWidth - 200)) + 200;

    noButton.style.position = 'absolute';
    noButton.style.top = newHeight + 'px';
    noButton.style.left = newWidth + 'px';
  }

  return <div>
    <Header state={title}/>
    <Image image= {foxImage}></Image>
    <YesButton onClick={handleYesButtonOnclick}></YesButton>
    <NoButton onMouseOver={handleNoButtonHover} onMouseLeave={handleNoButtonLeave}/>
  </div>
}

export default App;