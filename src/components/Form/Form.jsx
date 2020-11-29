import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { SketchPicker } from 'react-color';
import { GradientPicker } from 'react-linear-gradient-picker';
import { AnglePicker } from 'react-linear-gradient-picker';
import "./Form.css"

export const Form = ({
  setColor,
  color,
  setImage,
  image,
  setText,
  text,
  setUrl,
  url,
  setAngle,
  angle

}) => {

  // color = [
  //   { offset: '0.00', color: 'rgb(238, 241, 11)' },
  //   { offset: '0.49', color: 'rgb(215, 128, 37)' },
  //   { offset: '1.00', color: 'rgb(126, 32, 207)' }
  // ];

  return (
    <div className="form">
      {/*<GradientPicker*/}
      {/*  palette={color}*/}
      {/*  // color={color}*/}
      {/*  // onChange={color => setColor(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`)}*/}
      {/*  onPalleteChange={setColor()}*/}
      {/*>*/}
      {/*  <SketchPicker*/}

      {/*  />*/}
      {/*</GradientPicker>*/}
      <SketchPicker
        color={color}
        onChange={color => setColor(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`)}
      />
      <AnglePicker angle={angle} setAngle={setAngle}/>
      <TextField
        label="Добавить картинку картинку"
        type="text"
        name="url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <TextField
        label="Ссылка на баннер"
        type="text"
        name="url"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <TextareaAutosize
        rows={3}
        label="Введите текст банера"
        type="text"
        className=""
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Введите текст"
      />

    </div>
  )
}

