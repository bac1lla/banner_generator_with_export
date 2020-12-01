import React, {useState} from "react";
import './App.css';
import {Form} from "./components/Form/Form";
import {Image} from "./components/Image/Image"
import {ColorPicker} from "./components/ColorPicker/ColorPicker"

export default function App() {
  const [bgc, setBgc] = useState();
  const [image, setImage] = useState('');
  const [text, setText] = useState(``);
  const [url, setUrl] = useState('');
  const [angle, setAngle] = useState(90);
  const [colorsArr, setColorArr] = useState([{color: "#21c567"}])


  return (
    <div className="App">

      <Image
        image={image}
        text={text}
        url={url}
        bgc={bgc}
      />

      <Form
        setImage={(e) => setImage(e)}
        image={image}
        setText={(e) => setText(e)}
        text={text}
        setUrl={(e) => setUrl(e)}
        url={url}
        bgc={bgc}
        setBgc={(e) => setBgc(e)}
      />

      <ColorPicker
        style={{}}
        setColorsArr={(e) => setColorArr(e)}
        colorsArr={colorsArr}
        setAngle={(e) => setAngle(e)}
        angle={angle}
        setBgc={(e) => setBgc(e)}
      />

    </div>
  );
}
