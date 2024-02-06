import { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import NoButton from "./components/NoButton";
import YesButton from "./components/YesButton";
import confetti from "canvas-confetti";


const happy = "happy_fox.jpg"
const idle = "idle_fox.jpg"
const sad = "sad_fox.jpg"

var colors = ["#ffffff", "#F01E2C"];
var end = 0;

function frame(){
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}

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
    end = Date.now() + (15 * 200);
    frame();
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