
import React from 'react';
import styles from './basic.module.css';
import { useState } from 'react';
const BasicCalculator = () => {
  const [inputValue, setInputValue] = useState(''); //--> primer valor 
  const [secondValue, setSecondValue] = useState(''); //--> segundo valor 

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleMultiply = () => {
    resultMultiply = inputValue * secondValue;
    ;
  };

  const handleDivide = () => {
    resultDivide = inputValue / secondValue
  }

  const handleSum = () => {
    resultSum = inputValue + secondValue
  };

  const handleRest = () => {
    resultReset = inputValue - secondValue
  }






  const handleReset = () => {
    setInputValue('');
  }

  return (
    <div className={styles.calculator}>
      <input type="text" value={inputValue} />
      <br></br>
      <div className={styles.button}>
        <button onClick={() => handleButtonClick(1)}>1</button>
        <button onClick={() => handleButtonClick(2)} >2</button>
        <button onClick={() => handleButtonClick(3)}>3</button>
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
        <button>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button>=</button>
      </div>
      <div className={styles.button}>
        <button onClick={handleDivide}>/</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleRest}>-</button>
        <button onClick={handleSum}>+</button>
        <button onClick={handleReset}>C</button>
      </div>
    </div>
  );
};

export default BasicCalculator;

