import React from "react";
import "./Image.css"
import {Interface} from "../Interface/Interface";


export const Image = ({
                        image,
                        text,
                        url,
                        bgc
                      }) => {

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
      backgroundRepeat: "no-repeat",
      width: size.width,
      height: size.height,
      background: bgc,
    },
    text: {
      fontSize: 18,
      fontWeight: 600,
      font: "Roboto Arial sans-serif",
      color: "white",
      maxHeight: "4em",
      maxWidth: size.width,
      overflow: "hidden",
      padding: "0 10px 15px",
      wordWrap: "break-word",
      position: "absolute",
      whiteSpace: "pre-wrap",
      boxSizing: "border-box",

    },
  }

  const browseImg = () => {
    return image
      ? <img src={image} alt="" className="img"/>
      : ''
  }

  return (

    <div className="image__component">
      <div id="banner">
        <a style={{textDecoration: "none"}} href={url}>
          <div className="banner" style={styles.banner}>
            {browseImg()}
            <p style={styles.text}>{text}</p>
          </div>
        </a>
      </div>

      <Interface
        color={bgc}
        image={image}
        text={text}
        url={url}
      />

    </div>
  );
};

