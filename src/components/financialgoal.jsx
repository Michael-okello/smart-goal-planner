import react from "react"
import { useState } from "react"

function FinancialGoals() {
    const [goal, setGoal]=useState()

    function addGoals(formData) {
      const financialgoal = formData.get("financialgoal")
    }

    return (
      <section>
      <h1>Add New Goal</h1>
      <form onSubmit={addGoals} method="POST">
        <label htmlFor="financialgoal">Financial Goal</label>
        <input id="financialgoal"type="text" name="financialgoal" />
        <label htmlFor="category">Category</label>
        <input id="category" type="text" name="category"></input>
        <label htmlFor="targetAmount">Target Amount</label>
        <input id="targetAmount" type="text" name="targetAmount" />
        <label htmlFor="deadline">Deadline</label>
        <input id="deadline" type="date" name="deadline" />
      </form>
      </section>  
    )
}

export default FinancialGoals; 