import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FinancialGoals  from './components/financialgoal'
import ProgressCard from './components/ProgressCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <FinancialGoals />
   <ProgressCard />
   </>
  )
}

export default App
