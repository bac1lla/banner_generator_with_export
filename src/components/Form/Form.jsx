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





  return (
    <div className="form">
      <SketchPicker
        className="mb-10"
        color={color}
        onChange={color => setColor(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`)}
      />
      <AnglePicker angle={angle} setAngle={setAngle}/>
      <TextField
        label="Ссылка на картинку"
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
        rows={5}
        label="Введите текст банера"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Введите текст"
      />

    </div>
  )
}

