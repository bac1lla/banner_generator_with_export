import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { SketchPicker } from 'react-color';
import "./Form.css"

export const Form = ({
  setColor,
  color,
  setImage,
  image,
  setText,
  text
}) => {


  return (
    <div className="form">
      <SketchPicker
        color={color}
        onChange={color => setColor(`rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`)}
      />
      <TextField
        label="Ссылка на картинку"
        type="text"
        name="url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <TextareaAutosize
        rowsMax={3}
        rowsMin={1}
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

