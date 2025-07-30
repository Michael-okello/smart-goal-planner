import React, { useState } from "react";

function FinancialGoals() {
  const [formStatus, setFormStatus] = useState(""); // Optional: for feedback

  async function addGoals(formData) {
    const financialGoal = formData.get("financialGoal");
    const category = formData.get("category");
    const targetAmount = parseFloat(formData.get("targetAmount"));
    const deadline = formData.get("deadline");

    const newGoal = {
      name: financialGoal,
      category,
      targetAmount,
      deadline,
      savedAmount: 0 // default starting amount
    };

    try {
      const res = await fetch(
        "https://json-server-deployment-smart-goal-planner.onrender.com/goals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newGoal),
        }
      );

      if (!res.ok) throw new Error("Failed to add goal");

      setFormStatus("Goal added successfully!");
    } catch (error) {
      console.error("Error adding goal:", error);
      setFormStatus("Failed to add goal.");
    }
  }

  return (
    <section>
      <h1>Add New Goal</h1>

      <form
        action={async (formData) => {
          await addGoals(formData);
          document.getElementById("goal-form").reset(); // reset form manually
        }}
        id="goal-form"
      >
        <label htmlFor="financialGoal">Financial Goal</label>
        <input id="financialGoal" type="text" name="financialGoal" required />

        <label htmlFor="category">Category</label>
        <input id="category" type="text" name="category" required />

        <label htmlFor="targetAmount">Target Amount</label>
        <input id="targetAmount" type="number" name="targetAmount" required />

        <label htmlFor="deadline">Deadline</label>
        <input id="deadline" type="date" name="deadline" required />

        <button type="submit">Submit</button>
      </form>

      {formStatus && <p>{formStatus}</p>}
    </section>
  );
}

export default FinancialGoals;
