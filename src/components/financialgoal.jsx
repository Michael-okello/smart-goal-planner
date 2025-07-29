import react from "react"
import { useState } from "react"

function FinancialGoals() {
    function addGoals(formData) {
      const financialGoal = formData.get("financialgoal")
      const category = formData.get("category")
      const targetAmount = formData.get("targetAmount")
      const deadline = formData.get("deadline")
    }

    return (
      <section>
      <h1>Add New Goal</h1>
      <form action={addGoals} >
        <label htmlFor="financialGoal">Financial Goal</label>
        <input id="financialGoal"type="text" name="financialGoal" />

        <label htmlFor="category">Category</label>
        <input id="category" type="text" name="category"></input>

        <label htmlFor="targetAmount">Target Amount</label>
        <input id="targetAmount" type="text" name="targetAmount" />

        <label htmlFor="deadline">Deadline</label>
        <input id="deadline" type="date" name="deadline" />

        <button>Submit</button>
        
      </form>
      </section>  
    )
}

export default FinancialGoals; 