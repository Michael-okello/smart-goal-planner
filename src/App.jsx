import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FinancialGoals  from './components/financialgoal'

function App() {
  const [count, setCount] = useState(0)

  return (
   <FinancialGoals />
  )
}

export default App
