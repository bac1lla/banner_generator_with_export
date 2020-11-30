import React from "react"
import {ChromePicker} from "react-color"
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"
import Delete from "@material-ui/icons/Delete"

export const ColorPicker = ({
                              // setColor,
                              // color,
                              setColorsArr,
                              colorsArr
                            }) => {


  // function addColor() {
  //
  //   setColorsArr(React.createElement("div",null,
  //     <div>
  //       <ColorButtons />
  //       <Fab size="small" color="primary" aria-label="add">
  //         <Delete/>
  //       </Fab>
  //     </div>))


  //
  //   let newColor = React.createElement("div")
  //   newColor.style.width = "30px"
  //   newColor.style.height = "30px"
  //   newColor.innerHTML = `
  //       <ColorButtons/>
  //       <Fab size="small" color="primary" aria-label="add">
  //         <Delete/>
  //       </Fab>
  // `

  // colorsArr.push(newColor)
  // document.querySelector("#colorPick").append(newColor);

  // setColorsArr(React.createElement("div",null,
  //   <div>
  //     <ColorButtons />
  //     <Fab size="small" color="primary" aria-label="add">
  //       <Delete/>
  //     </Fab>
  //   </div>))

  // ReactDOM.render(colorsArr.map((e, i) => {
  //   return e;
  //   // e.id = `color-${i}`
  // }), document.querySelector("#colorPick"))
  // }


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

      <Fab
        style={{marginBottom: 15}}
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => handleAddClick()}
      >
        <AddIcon/>
      </Fab>

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


// const [colorsArr, setColorsArr] = useState([{ firstName: "", lastName: "" }]);
//
// // handle input change
// const handleInputChange = (e, index) => {
//   const { name, value } = e.target;
//   const list = [...colorsArr];
//   list[index][name] = value;
//   setColorsArr(list);
// };
//
// // handle click event of the Remove button
// const handleRemoveClick = index => {
//   const list = [...colorsArr];
//   list.splice(index, 1);
//   setColorsArr(list);
// };
//
// // handle click event of the Add button
// const handleAddClick = () => {
//   setColorsArr([...colorsArr, { firstName: "", lastName: "" }]);
// };
//
// return (
//   <div className="App">


// <Fab
//   size="small"
//   color="primary"
//   aria-label="add"
//   onClick={addColor}
// >
//   <AddIcon/>
// </Fab>
// {colorsArr.map((x, i) => {
//   return (
//
//     <div>
//       <ColorButtons
//         // value={x.firstName}
//         // onChange={e => handleInputChange(e, i)}
//       />
//       {colorsArr.length !== 1 && <Fab
//         size="small"
//         color="primary"
//         aria-label="add"
//         onClick={() => handleRemoveClick(i)}><Delete/></Fab>}
//     </div>
//   )})}



