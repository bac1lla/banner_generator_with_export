import React from "react";
import "./Image.css"
import {Interface} from "../Interface/Interface";


export const Image = ({/*size,*/ colorsArr, image = './', text, url}) => {

  const size = {
    width: 138,
    height: 188,
  }

  const styles = {
    banner: {
      cursor: "pointer",
      borderRadius: 15,
      display: "flex",
      alignItems: "flex-end",
      textDecoration: "none",
      backgroundRepeat: "no-repeat",
      width: size.width,
      height: size.height,
      backgroundColor: colorsArr[0].color,
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
    },
    text: {
      fontSize: 18,
      fontWeight: 600,
      font: "Roboto Arial sans-serif",
      color: "white",
      maxHeight: "4em",
      maxWidth: size.width,
      overflow: "hidden",
      margin: "0 10px 15px",
      wordWrap: "break-word"
    },

  }


  return (

    <div className="image__component">
      <div id="banner">
        <a style={{textDecoration: "none"}} href={url}>
          <div className="banner" style={styles.banner}>
            <p style={styles.text}>{text}</p>
          </div>
        </a>
      </div>
      <Interface
        color={colorsArr}
        image={image}
        text={text}
        url={url}
      />

    </div>
  );
};


