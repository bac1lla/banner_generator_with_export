import React from "react"
import {ChromePicker} from "react-color"
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import Delete from "@material-ui/icons/Delete"
import {TextField} from "@material-ui/core";

export const ColorPicker = ({
                              // setColor,
                              // color,
                              setColorsArr,
                              colorsArr,
                              setAngle,
                              angle
                            }) => {


  const handleChangeColor = (newColor, index) => {

    const list = [...colorsArr];
    list[index].color = newColor.hex;
    setColorsArr(list);
  };

  const handleRemoveClick = (index, arr) => {

    const list = [...colorsArr];
    list.splice(index, 1);

    setColorsArr(list)

  };

  const handleAddClick = () => {
    setColorsArr([...colorsArr, {color: "#FFF"}]);
  };


  return (
    <div>

      <div style={{display: "flex"}}>
        <Fab
          style={{marginBottom: 15}}
          size="small"
          color="primary"
          aria-label="add"
          onClick={() => handleAddClick()}
        >
          <AddIcon/>
        </Fab>

        <TextField
          className="mb-30"
          label="Угол градиента"
          type="number"
          onChange={(e) => setAngle(e.target.value)}
          value={angle}
        />

      </div>

      {colorsArr.map((elem, i, arr) => {
        return (
          <div style={{display: "flex", alignItems: "center", marginBottom: 15}} key={`color-${i}`}>

            <ChromePicker
              disableAlpha={true}
              color={elem.color}
              onChange={e => handleChangeColor(e, i)}
            />

            {/*<div style={{width: 10, height: 10, backgroundColor: elem.color}}></div>*/}

            <Fab
              size="small"
              color="primary"
              aria-label="add"
              onClick={() => handleRemoveClick(i, arr)}><Delete/></Fab>
          </div>
        )
      })}
    </div>
  )
}


