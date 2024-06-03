import React from 'react'
import styles from './calorie.module.css'
import { useState } from 'react';

const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [sex, setSex] = useState('Femenino');
  const [activity, setActivity] = useState('sedentary');
  const [result, setResult] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault(); // evita que se recarge la pagina

    // Calculo de las calorías para mujeres
  if (sex === 'Femenino') {
    const calories = (65 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) * getActivityFactor(activity);
    setResult(calories.toFixed(2));
  }
  // Calculo de las calorías para hombres
  else {
    const calories = (66 + (13.7 * weight) + (5 * height) - (6.8 * age)) * getActivityFactor(activity);
    setResult(calories.toFixed(2));
  }
  };

  const getActivityFactor = (activity) => {
    switch (activity) {
      case 'sedentary':
        return 1.2;
      case 'light':
        return 1.375;
      case 'moderate':
        return 1.55;
      case 'vigorous':
        return 1.725;
      default:
        return 1.2;
    }
  };

  return (
    <div className={styles.calculatorCalorie}>
      <h2>Calculadora de Calorías</h2>
      <form onSubmit={handleCalculate}>
        <label>
          Edad:
          <input
            type="number"
            name="age"
            placeholder="Edad en años"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Peso:
          <input
            type="number"
            name="weight"
            placeholder="Peso en kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Altura:
          <input
            type="number"
            name="height"
            placeholder="Altura en cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <label>
          Sexo:
          <select
            name="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
          </select>
        </label>
        <label>
          Actividad:
          <select
            name="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          >
            <option value="sedentary">Sedentario</option>
            <option value="light">Ligero</option>
            <option value="moderate">Moderado</option>
            <option value="active">Activo</option>
            <option value="very_active">Muy Activo</option>
          </select>
        </label>
        <div className={styles.inputButtonGroup}>
          <button type="submit">Calcular</button>
          <input type="number" placeholder="Resultado" value={result} readOnly />
        </div>
      </form>
    </div>
  );
};

export default CalorieCalculator;

