# Proyecto de Calculadoras en React

Este proyecto incluye tres calculadoras:
1. Calculadora de operaciones básicas.
2. Calculadora de conversión de unidades de medida.
3. Calculadora de calorías diarias necesarias (MB).

<b>¡Importante!</b>
Los ejemplos que se muestran a continuación solo son de referencia,
puedes modificar el código para que funcione con tus propias necesidades y gustos.

Los estilos quedan a disposición del desarrollador.


## Paso 1: Instalar dependencias

Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
cd path-to-your-project
npm install
```
## Paso 2: Ejecutar la aplicación

```bash
npm run dev
```

Este comando ejecutará la aplicación en el modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) para verla en el navegador.

## Paso 3: Crear componentes de las calculadoras

### Calculadora de operaciones básicas

Crea un componente `BasicCalculator.js` en la carpeta `src/components`.

```javascript
import React, { useState } from 'react';

function BasicCalculator() {
    const [result, setResult] = useState("");

    // Función para manejar los cálculos
    const handleCalculate = (expression) => {
        try {
            setResult(eval(expression).toString());
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div>
            <input type="text" onChange={(e) => handleCalculate(e.target.value)} />
            <p>Resultado: {result}</p>
        </div>
    );
}

export default BasicCalculator;
```

### Calculadora de conversión de unidades

La calculadora debe tener la posibidad de convertir desde centimetros a kilometros,
pasando por cada una de las unidades intermedias (decimetro, metros, etc.), Igualmente
con las unidades de tiempo.

Crea un componente `UnitConverter.js` en la misma carpeta.

```javascript
import React, { useState } from 'react';

function UnitConverter() {
    const [inputValue, setInputValue] = useState(0);
    const [outputValue, setOutputValue] = useState(0);
    const [unit, setUnit] = useState("minutesToHours"); // default conversion

    // Función para manejar la conversión
    const handleConversion = () => {
        if (unit === "minutesToHours") {
            setOutputValue(inputValue / 60);
        } else if (unit === "kmToMiles") {
            setOutputValue(inputValue * 0.621371);
        }
    };

    return (
        <div>
            <input type="number" onChange={(e) => setInputValue(e.target.value)} />
            <select onChange={(e) => setUnit(e.target.value)}>
                <option value="minutesToHours">Minutes to Hours</option>
                <option value="kmToMiles">Kilometers to Miles</option>
            </select>
            <button onClick={handleConversion}>Convertir</button>
            <p>Valor convertido: {outputValue}</p>
        </div>
    );
}

export default UnitConverter;
```

### Calculadora de calorías diarias (MB)

Crea un componente `CalorieCalculator.js` en la misma carpeta.

```javascript
import React, { useState } from 'react';

function CalorieCalculator() {
    const [weight, setWeight] = useState(0); // peso en kg
    const [height, setHeight] = useState(0); // altura en cm
    const [age, setAge] = useState(0); // edad en años
    const [calories, setCalories] = useState(0);

    // Función para calcular las calorías
    const calculateCalories = () => {
        if (gender === "male") {
            setCalories((10 * weight + 6.25 * height - 5 * age + 5).toFixed(2));  // formala de Harris-Benedict
        } else {
            setCalories((10 * weight + 6.25 * height - 5 * age - 161).toFixed(2));  // formula de Harris-Benedict
        }
    };

    return (
        <div>
            <input type="number" placeholder="Peso (kg)" onChange={(e) => setWeight(e.target.value)} />
            <input type="number" placeholder="Altura (cm)" onChange={(e) => setHeight(e.target.value)} />
            <input type="number" placeholder="Edad (años)" onChange={(e) => setAge(e.target.value)} />
            <button onClick={calculateCalories}>Calcular Calorías</button>
            <p>Calorías diarias necesarias: {calories}</p>
        </div>
    );
}

export default CalorieCalculator;
```

## Paso 4: Integrar los componentes en App.js

Modifica el `App.js` para incluir los tres componentes

.

```javascript
import React from 'react';
import BasicCalculator from './components/BasicCalculator';
import UnitConverter from './components/UnitConverter';
import CalorieCalculator from './components/CalorieCalculator';

function App() {
    return (
        <div className="App">
            <h1>Calculadoras</h1>
            <BasicCalculator />
            <UnitConverter />
            <CalorieCalculator />
        </div>
    );
}

export default App;
```

## Paso 5: Verificar funcionalidad

Realiza pruebas manuales para asegurarte de que todas las calculadoras funcionan correctamente.

## Paso 6: Publicar el proyecto

Una vez verificado que todo funciona como se espera, es hora de publicar tus cambios:

```bash
git add .
git commit -m "Añade tres calculadoras"
git push
```

Este es un ejemplo básico de cómo puedes organizar y documentar tu proyecto de React para las calculadoras. Asegúrate de adaptar cada parte según las especificaciones y necesidades de tu proyecto.
