import React, {useState} from "react"
import {ChromePicker} from "react-color"
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import Delete from "@material-ui/icons/Delete"
import {TextField} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import "./ColorPicker.css"


export const ColorPicker = ({
                              setColorsArr,
                              colorsArr,
                              setAngle,
                              angle,
                              setBgc
                            }) => {

  const [open, setOpen] = useState(false);

  setBgc((colorsArr.length > 1)
    ? toLinearGradient(colorsArr.map(e => e.color).join(', '), angle)
    : colorsArr.map(e => e.color).join(', '))


  function toLinearGradient(color, angle) {
    return `linear-gradient(${angle}deg, ${color})`
  }


  const handleChangeColor = (newColor, index) => {

    const list = [...colorsArr];
    list[index].color = newColor.hex;
    setColorsArr(list);
  };

  const handleRemoveClick = (index) => {

    const list = [...colorsArr];
    list.splice(index, 1);

    setColorsArr(list)
  };

  const handleAddClick = () => {
    colorsArr.length < 4
      ? setColorsArr([...colorsArr, {color: "#fff"}])
      : openSnackbar()
  };


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

  return (
    <div className="colorPicker">

      <div className="addColor">
        <div className="mb-15">

          <Fab
            size="small"
            color="primary"
            aria-label="add"
            onClick={handleAddClick}
          >
            <AddIcon/>
          </Fab>

        </div>
        <TextField
          className="mb-30"
          label="Угол градиента"
          type="number"
          onChange={(e) => setAngle(e.target.value)}
          value={angle}
        />

      </div>
      <div>

        {colorsArr.map((elem, i, arr) => {
          return (
            <div className="color" key={`color-${i}`}>

              <ChromePicker
                disableAlpha={true}
                color={elem.color}
                onChange={e => handleChangeColor(e, i)}
              />

              <Fab
                size="small"
                color="primary"
                aria-label="add"
                onClick={() => handleRemoveClick(i, arr)}
              >
                <Delete/>
              </Fab>

            </div>
          )
        })}
      </div>


      <Snackbar open={open} autoHideDuration={5000} onClose={closeSnackbar}>
        <Alert severity="error">Too many colors!</Alert>
      </Snackbar>
    </div>
  )
}


