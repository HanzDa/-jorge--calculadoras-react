import './App.css'
import { Routes, Route } from 'react-router-dom'
import BasicCalculator from './Components/BasicCalculator/BasicCalculator'
import UnitConverter from './Components/UnitConverter/UnitConverter'
import CalorieCalculator from './Components/CalorieCalculator/CalorieCalculator'

function App() {
  return (
    <div>
      <h1>Calculadoras</h1>
      <Routes>
        <Route path="/" element={<BasicCalculator />} />
        <Route path="/unit" element={<UnitConverter />} />
        <Route path="/calorie" element={<CalorieCalculator />} />
      </Routes>
    </div>
  )
}

export default App
