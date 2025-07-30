function Overview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0);
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount);

  function daysLeft(deadline) {
    const now = new Date();
    const due = new Date(deadline);
    const diff = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
    return diff;
  }

  return (
    <section>
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completedGoals.length}</p>

      <ul>
        {goals.map(goal => {
          const remaining = goal.targetAmount - goal.savedAmount;
          const days = daysLeft(goal.deadline);
          const status = goal.savedAmount >= goal.targetAmount
            ? 'Completed'
            : days < 0
              ? 'Overdue'
              : days <= 30
                ? 'Near Deadline'
                : 'In Progress';

          return (
            <li key={goal.id}>
              <strong>{goal.name}</strong> - {status}
              <br />
              ${goal.savedAmount} saved / ${goal.targetAmount} target
              <br />
              {days >= 0 ? `${days} days left` : `Deadline passed`}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Overview;
