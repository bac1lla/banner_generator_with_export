import React, {useState} from "react";
import './App.css';
import {Form} from "./components/Form/Form";
import {Image} from "./components/Image/Image"

function App() {
  const [color, setColor] = useState('#21c567');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [downloadPng, setDownloadPng] = useState();



  return (
    <div className="App">

      <Image
        color={color}
        image={image}
        text={text}
      />
      <Form
        setColor={(e) => setColor(e)}
        color={color}
        setImage={(e) => setImage(e)}
        image={image}
        setText={(e) => setText(e)}
        text={text}
      />

    </div>
  );
}

export default App;

