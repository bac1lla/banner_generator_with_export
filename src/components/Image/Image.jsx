import React, {useEffect, useRef} from "react";
import "./Image.css"

export const Image = ({color, image = './', text, url}) => {
  // const canvasRef = useRef(null);
  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext('2d');
  //   canvas.width = 282;
  //   canvas.height = 376;
  //   context.fillStyle = color;
  //   context.fillRect(0, 0, 282, 376);
  //
  //   context.fillStyle = 'white';
  //   context.font = '32px sans';
  //   context.fillText(text, 10,180);
  //   // if (image) {
  //   //   let imageObj = new Image();
  //   //   imageObj.crossOrigin = '*';
  //   //   imageObj.onload = () => {
  //   //     context.drawImage(imageObj, 0, 0);
  //     // };
  //     // imageObj.src = image;
  //   // }
  // }, [color, image, text]);

  const size = {
    width: 282,
    height: 376,
  }

  const styles = {
    banner: {
      width: size.width,
      height: size.height,
      backgroundColor: color,
      backgroundImage: `url(${image})`,

    },
    text: {
      fontSize: 32,
      color: "white",
      maxHeight: "5em",
      maxWidth: size.width - 25, //25 - padding
      overflow: "hidden",
      padding: 25,
      wordWrap: "break-word"
    },

  }


  return (
    // <canvas
    //   className="banner"
    //   ref={canvasRef}
    //   // onClick={() => (document.location.href = image)}
    // />
    <a className="tdn" href={url} >
      <div className="banner" style={styles.banner}>
        <p style={styles.text}>{text}</p>
      </div>
    </a>
  );
};


