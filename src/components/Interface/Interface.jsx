import React from "react";
import html2canvas from "html2canvas";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import {saveAs} from 'file-saver';
import "./Interface.css"
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


export const Interface = ({color, image, text, url}) => {


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
        openSnackbar()
      })
      .catch(err => {
        alert('ERR')
      });
  }

  function copyJson() {
    navigator.clipboard.writeText(JSON.stringify({color: color, image: image, text: text, url: url}))
      .then(() => {
        openSnackbar()
      })
      .catch(err => {
        alert('ERR')
      });
  }

  const [open, setOpen] = React.useState(false);

  const openSnackbar = () => {
    setOpen(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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


      <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity="success">
          Success!
        </Alert>
      </Snackbar>
    </div>

  );
};


