import React from "react";
import "./Image.css"
import html2canvas from "html2canvas";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { saveAs } from 'file-saver';


export const Image = ({color, image = './', text, url}) => {

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
      maxWidth: size.width,
      overflow: "hidden",
      padding: 25,
      wordWrap: "break-word"
    },

  }

  function savePng() {

    html2canvas(document.querySelector("#banner")).then((canvas) => {
      canvas.toBlob(function (blob) {
        saveAs(blob, "banner.png");
      });
    })
  }

  function copyHtml() {
    navigator.clipboard.writeText(document.querySelector("#banner").innerHTML)
      .then(() => {
        alert('HTML copy')
      })
      .catch(err => {
        alert('ERR')
      });
  }


  return (
    <div>
      <div id="banner">
      <a className="tdn" href={url}>
        <div className="banner" style={styles.banner}>
          <p style={styles.text}>{text}</p>
        </div>
      </a>
      </div>

      <Button
        variant="contained"
        color="primary"
        startIcon={<SaveIcon/>}
        onClick={savePng}
      >
        Save PNG
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<FileCopyIcon/>}
      >
        Copy JSON
      </Button>
      <Button
        variant="contained"
        color="default"
        startIcon={<FileCopyIcon/>}
        onClick={copyHtml}
      >
        Copy HTML
      </Button>
    </div>
  );
};


