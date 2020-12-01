import React from "react";
import {TextareaAutosize, TextField} from "@material-ui/core";
import "./Form.css"


export const Form = ({
                       setImage,
                       image,
                       setText,
                       text,
                       setUrl,
                       url
                     }) => {


  return (
    <div className="form__component">

      <TextField
        className="mb-30"
        label="Ссылка на картинку"
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <TextField
        className="mb-30"
        label="Ссылка на баннер"
        type="text"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <TextareaAutosize
        rows={5}
        cols={28}
        label="Введите текст банера"
        style={{marginTop: 30}}
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Введите текст"
      />

    </div>
  )
}

