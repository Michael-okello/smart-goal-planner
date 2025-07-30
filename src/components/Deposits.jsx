import { useState } from "react";

function Deposits({ goals, onDepositMade }) {
  const [status, setStatus] = useState("");

  async function addDeposits(formData) {
    const depositAmount = parseFloat(formData.get("deposit"));
    const goalId = formData.get("goal");

    if (!goalId || isNaN(depositAmount) || depositAmount <= 0) {
      setStatus("Select a goal and enter a valid amount.");
      return;
    }

    const goal = goals.find(g => g.id == goalId);
    if (!goal) {
      setStatus("Goal not found.");
      return;
    }

    const newSavedAmount = goal.savedAmount + depositAmount;

    try {
      const res = await fetch(`https://json-server-deployment-smart-goal-planner.onrender.com/goals/${goalId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ savedAmount: newSavedAmount }),
      });

      if (!res.ok) throw new Error();

      onDepositMade(); // trigger refetch in App
      setStatus(`Deposited $${depositAmount} to "${goal.name}"`);
    } catch {
      setStatus("Failed to deposit.");
    }
  }

  return (
    <section>
      <h2>Make a Deposit</h2>
      <form
        id="deposit-form"
        action={async (formData) => {
          await addDeposits(formData);
          document.getElementById("deposit-form").reset();
        }}
      >
        <label htmlFor="goal">Select a Goal</label>
        <select id="goal" name="goal" required>
          <option value="">-- Choose a goal --</option>
          {goals.map(goal => (
            <option key={goal.id} value={goal.id}>
              {goal.name} (${goal.savedAmount} / ${goal.targetAmount})
            </option>
          ))}
        </select>

        <label htmlFor="deposit">Deposit Amount</label>
        <input type="number" id="deposit" name="deposit" min="1" required />

        <button type="submit">Deposit</button>
      </form>

      {status && <p>{status}</p>}
    </section>
  );
}

export default Deposits;


