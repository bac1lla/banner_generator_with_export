import React from "react";
import html2canvas from "html2canvas";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import {saveAs} from 'file-saver';
import "./Interface.css"


export const Interface = ({/*size,*/ color, image = './', text, url}) => {


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

  const mb15 = {
    marginBottom: 15
  }

  return (
    <div className="buttons_component mt-40">

      <Button
        style={mb15}
        variant="contained"
        color="secondary"
        startIcon={<FileCopyIcon/>}
        onClick={copyJson}
      >
        Copy JSON
      </Button>

      <Button
        style={mb15}
        variant="contained"
        color="primary"
        startIcon={<SaveIcon/>}
        onClick={savePng}
      >
        Save PNG
      </Button>

      <Button
        style={mb15}
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


