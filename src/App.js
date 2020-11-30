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
  // const [size, setSize] = useState({
  //   width: 138,
  //   height: 188,
  // })


  return (
    <div className="App">

      <Image
        // size={size}
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
        // setSize={(attribute, value) => setSize({ ...size, [attribute]: value })}
        // size={size}
      />

    </div>
  );
}

export default App;

