import React, {useState} from "react";
import './App.css';
import {Form} from "./components/Form/Form";
import {Image} from "./components/Image/Image"

function App() {
  const [color, setColor] = useState('#21c567');
  const [image, setImage] = useState('');
  const [text, setText] = useState(``);
  const [url, setUrl] = useState('');
  const [angle, setAngle] = useState(25);




  return (
    <div className="App">

      <Image
        color={color}
        image={image}
        text={text}
        url={url}
        angle={angle}
      />
      <Form
        setColor={(e) => setColor(e)}
        color={color}
        setImage={(e) => setImage(e)}
        image={image}
        setText={(e) => setText(e)}
        text={text}
        setUrl={(e) => setUrl(e)}
        url={url}
        setAngle={(e) => setAngle(e)}
        angle={angle}
      />


    </div>
  );
}

export default App;

