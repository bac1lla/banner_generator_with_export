import React from "react";
import "./Image.css"
import html2canvas from "html2canvas";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import {saveAs} from 'file-saver';


export const Image = ({/*size,*/ color, image = './', text, url}) => {

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
      backgroundColor: color,
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
    },
    text: {
      fontSize: 18,
      fontWeight: 600,
      fontFamily: "Arial sans-serif",
      color: "white",
      maxHeight: "3.5em",
      maxWidth: size.width,
      overflow: "hidden",
      margin: "0 10px 15px",
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

  function copyJson() {
    navigator.clipboard.writeText(JSON.stringify({color: color, image: image, text: text, url: url}))
      .then(() => {
        alert('JSON copy')
      })
      .catch(err => {
        alert('ERR')
      });
  }

  return (
    <div>
      <div id="banner">
        <a style={{textDecoration: "none"}} href={url}>
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
        onClick={copyJson}
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


