
import React from 'react';
import styles from './basic.module.css';
import { useState } from 'react';
const BasicCalculator = () => {
  const [inputValue, setInputValue] = useState(""); //--> primer valor 
  const [secondValue, setSecondValue] = useState(""); //--> segundo valor 
  const [operator, setOperator] = useState(""); //--> EL operador que se hara
  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setInputValue("");
    setSecondValue(secondValue);
  };


  const handleResults = () => {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(inputValue) + parseFloat(secondValue);
        break;
      case "-":
        result = parseFloat(inputValue) - parseFloat(secondValue);
        break;
      case "*":
        result = parseFloat(inputValue) * parseFloat(secondValue);
        break;
      case "/":
        if (parseFloat(inputValue) !== 0) {
          result = parseFloat(secondValue) / parseFloat(inputValue);
        } else {
          result = "error";
        }
        break;
      default:
        break;
    }
  };
  




  const handleReset = () => {
    setInputValue('');
  }

  // el onchange sirve para borrar en el input. para modificarlo
  return (
    <div className={styles.calculator}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <br></br>
      <div className={styles.button}>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")} >2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
      </div>
      <div className={styles.button}>
        <button onClick={() => handleButtonClick("4")} >4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
      </div>
      <div className={styles.button}>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
      </div>
      <div className={styles.button}>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleResults}>=</button>
      </div>
      <div className={styles.button}>
        <button onClick={handleOperatorClick}>/</button>
        <button onClick={handleOperatorClick}>*</button>
        <button onClick={handleOperatorClick}>-</button>
        <button onClick={handleOperatorClick}>+</button>
        <button onClick={handleReset}>C</button>
      </div>
    </div>
  );
};

export default BasicCalculator;

