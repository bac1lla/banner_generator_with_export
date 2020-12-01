import React from "react";
import "./Image.css"
import {Interface} from "../Interface/Interface";


export const Image = ({/*size,*/ colorsArr, image, text, url, angle}) => {

  // let backgroundColor = (colorsArr.length === 1) ? colorsArr[0].color : colorsArr.reduce( (str, el) => {
  //   return str + el.color
  // }, '')

  // let backgroundColor = (colorsArr.length === 1) ? colorsArr[0].color : colorsArr.map( e => e.color).join(', ')
  const backgroundColor = (colorsArr.length > 1 )
    ? toLinearGradient(colorsArr.map( e => e.color).join(', '), angle)
    : colorsArr.map( e => e.color).join(', ')


  function toLinearGradient (color, angle) {
    return `linear-gradient(${angle}deg, ${color})`
  }

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
      // textDecoration: "none",
      backgroundRepeat: "no-repeat",
      width: size.width,
      height: size.height,
      // background: colorsArr[0].color,
      background: backgroundColor,
      // backgroundImage: `url(${image})`,
      // backgroundSize: "contain",
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
      wordWrap: "break-word",
      position: "absolute",
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
        color={colorsArr}
        image={image}
        text={text}
        url={url}
      />

    </div>
  );
};


