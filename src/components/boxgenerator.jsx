import React, { useState } from "react";
import style from "./style.module.css";
import StyledBox from "./box";

const BoxGenerator = () => {
  const colorInput = React.createRef();
  const [state, setState] = useState({
    boxes: [],
    inputColor: "",
  });

  const onClickHandler = () => {
    setState({
      boxes: [
        ...state.boxes,
        {
          color: state.inputColor,
        },
      ],
    });
    colorInput.current.value = "";
  };

  const onChangeColorHandler = (e) => {
    setState({
      ...state,
      inputColor: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add a box</h1>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          ref={colorInput}
          onChange={onChangeColorHandler}
          placeholder="Enter Color"
        />
        <button className={style.btn} onClick={onClickHandler}>
          Submit
        </button>
      </div>
      <div className={style.container}>
        {state.boxes.map((box) => (
          <StyledBox bgColor={box.color}></StyledBox>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
