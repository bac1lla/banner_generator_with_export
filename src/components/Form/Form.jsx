import React from "react";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { SketchPicker } from 'react-color';
import "./Form.css"

export const Form = ({
  resize,
  setResize,
  color,
  setColor,
  image,
  setImage,
  text,
  setText
}) => {


  return (
    <div className="form">
      <TextField
        label="Ширина"
        type="number"
        name="height"
        // onChange={}
        value={resize.width}
      />
      <TextField
        label="Высота"
        type="number"
        name="height"
        // onChange={}
        value={resize.height}
      />
      <SketchPicker
        color={color}
        // onChangeComplete={e => setColor(e.)}
      />
      <TextField
        label="Ссылка на картинку"
        type="text"
        name="height"
        // onChange={}
        value={image}
      />
      <TextareaAutosize
        rowsMax={3}
        rowsMin={1}
        label="Введите текст банера"
        type="text"
        className=""
        id=""
        // onChange={}
        // value={}
        placeholder="Введите текст"
      />

    </div>
  )
}

