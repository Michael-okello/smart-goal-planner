import { useState, useEffect } from 'react';
import FinancialGoals from './components/financialgoal';
import ProgressCard from './components/ProgressCard';
import Deposits from './components/Deposits';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  // Fetch goals on mount or when data changes (e.g., add or deposit)
  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const res = await fetch("https://json-server-deployment-smart-goal-planner.onrender.com/goals");
        const data = await res.json();
        setGoals(data);
      } catch (err) {
        console.error("Failed to fetch goals:", err);
      }
    };

    fetchGoals();
  }, []); // empty dependency array: only fetch on mount

  // Function to refresh the goal list manually (passed to children)
  const refreshGoals = () => {
    fetch("https://json-server-deployment-smart-goal-planner.onrender.com/goals")
      .then(res => res.json())
      .then(data => setGoals(data))
      .catch(err => console.error("Refresh failed:", err));
  };

  return (
    <>
      <FinancialGoals onGoalAdded={refreshGoals} />
      <Deposits goals={goals} onDepositMade={refreshGoals} />
      <ProgressCard goals={goals} />
      <Overview goals={goals} />
     
    </>
  );
}

export default App;


