import { useState } from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import NoButton from "./components/NoButton";

const happy = "happy_fox.jpg"
const idle = "idle_fox.jpg"
const sad = "sad_fox.jpg"


function App(){
  const [foxImage, setFoxImage] = useState(idle);
  const [title, setTitle] = useState(0)

  const handleNoButtonHover = () => {
    setFoxImage(sad)
    setTitle(1)
    console.log("SAD");
  }

  const handleNoButtonLeave = () => {
    setFoxImage(idle)
    setTitle(0)
  }


  return <div>
    <Header state={title}/>
    <Image image= {foxImage}></Image>
    <NoButton onMouseOver={handleNoButtonHover} onMouseLeave={handleNoButtonLeave}/>
  </div>
}

export default App;