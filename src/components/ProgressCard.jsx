function ProgressCard({ goals }) {
  return (
    <div className="card">
      <h2>Your Goals</h2>

      {goals.length === 0 ? (
        <p>No goals yet.</p>
      ) : (
        goals.map((goal) => (
          <div key={goal.id} className="goal-card">
            <h3>{goal.name}</h3>
            <p><strong>Category:</strong> {goal.category}</p>
            <p><strong>Target Amount:</strong> ${goal.targetAmount}</p>
            <p><strong>Saved Amount:</strong> ${goal.savedAmount}</p>
            <p><strong>Deadline:</strong> {goal.deadline}</p>
            <p>
              <strong>Progress:</strong>{" "}
              {Math.min(
                100,
                Math.round((goal.savedAmount / goal.targetAmount) * 100)
              )}
              %
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProgressCard;



