import React, {useState} from "react";
import './App.css';
import {Form} from "./components/Form/Form";
import {Image} from "./components/Image/Image"
import {ColorPicker} from "./components/ColorPicker/ColorPicker"
import {colors} from "@material-ui/core";

function App() {
  const [color, setColor] = useState('#21c567');
  const [image, setImage] = useState('');
  const [text, setText] = useState(``);
  const [url, setUrl] = useState('');
  const [angle, setAngle] = useState();
  const [colorsArr, setColorArr] = useState([{color: "#21c567"}])
  // const [size, setSize] = useState({
  //   width: 138,
  //   height: 188,
  // })


  return (
    <div className="App">

      <Image
        // size={size}
        colorsArr={colorsArr}
        image={image}
        text={text}
        url={url}
        angle={angle}

      />


      <Form
        setImage={(e) => setImage(e)}
        image={image}
        setText={(e) => setText(e)}
        text={text}
        setUrl={(e) => setUrl(e)}
        url={url}

        // setSize={(attribute, value) => setSize({ ...size, [attribute]: value })}
        // size={size}
      />

      <ColorPicker
        // setColor={(e) => setColor(e)}
        // color={color}
        // setColorsArr={(e) => setColorArr([...colorsArr, e])}
        setColorsArr={(e) => setColorArr(e)}
        colorsArr={colorsArr}
        setAngle={(e) => setAngle(e)}
        angle={angle}
      />

    </div>
  );
}

export default App;
//
// "@material-ui/core": "^4.11.1",
//   "@material-ui/icons": "^4.9.1",
//   "react-color": "^2.19.3"
