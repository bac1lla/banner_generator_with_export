import React, {useEffect, useRef} from "react";
import "./Image.css"

export const Image = ({color, image = './', text}) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 282;
    canvas.height = 376;
    context.fillStyle = color;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);

    context.fillStyle = 'white';
    context.font = '32px sans';
    context.fillText(text, 20,170);
    // if (image) {
    //   let imageObj = new Image();
    //   imageObj.crossOrigin = '*';
    //   imageObj.onload = () => {
    //     context.drawImage(imageObj, 0, 0);
      // };
      // imageObj.src = image;
    // }
  }, [color, image, text]);

  return (
    <canvas
      className="banner"
      ref={canvasRef}
      // onClick={() => (document.location.href = image)}
    />
  );
};
