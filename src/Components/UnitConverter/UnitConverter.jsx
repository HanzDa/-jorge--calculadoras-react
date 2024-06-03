import React from 'react'
import styles from './unit.module.css'
import { useState } from 'react';

const UnitConverter = () => {



  
  return (
    <div className={styles.container}>
      <h2>Calculadora de Unidades</h2>
      <form>
        <div className={styles.input}>
          <input type="number" placeholder="Ingresar dato..." readOnly />
          <select name="sex">
            <option value="Milimetros">Milimetros</option>
            <option value="Centimetros">Centimetros</option>
            <option value="Metros">Metros</option>
            <option value="Decametros">Decametros</option>
            <option value="Kilometros">Kilometros</option>
            <option value="Millas">Millas</option>
          </select>
        </div>
        <label>=</label>
        <div className={styles.input}>
          <input type="number" readOnly />
          <select name="longitudes">
            <option value="Milimetros">Milimetros</option>
            <option value="Centimetros">Centimetros</option>
            <option value="Metros">Metros</option>
            <option value="Decametros">Decametros</option>
            <option value="Kilometros">Kilometros</option>
            <option value="Millas">Millas</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default UnitConverter;

