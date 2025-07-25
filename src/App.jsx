import { useState } from 'react'
import FinancialGoals  from './components/financialgoal'
import ProgressCard from './components/ProgressCard'
import Deposits from "./components/Deposits"; // Adjust path if it's in a different folder


function App() {


  return (
  <>
  <FinancialGoals />
  <Deposits />
  <ProgressCard />
  </>
  )
}

export default App
