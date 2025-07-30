// components/ManageGoals.jsx
import { useState } from 'react';

function ManageGoals({ goals, onGoalUpdated, onGoalDeleted }) {
  const [editGoalId, setEditGoalId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    targetAmount: '',
    deadline: ''
  });

  function handleEditClick(goal) {
    setEditGoalId(goal.id);
    setFormData({
      name: goal.name,
      category: goal.category,
      targetAmount: goal.targetAmount,
      deadline: goal.deadline
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleUpdate(e) {
    e.preventDefault();
    const updatedGoal = {
      id: editGoalId,
      ...formData,
      targetAmount: parseFloat(formData.targetAmount)
    };
    onGoalUpdated(updatedGoal);
    setEditGoalId(null);
  }

  return (
    <section>
      <h2>Update or Delete Goals</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            {editGoalId === goal.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
                <input
                  name="targetAmount"
                  type="number"
                  value={formData.targetAmount}
                  onChange={handleChange}
                  required
                />
                <input
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditGoalId(null)}>Cancel</button>
              </form>
            ) : (
              <div>
                <strong>{goal.name}</strong> - ${goal.targetAmount}<br />
                <button onClick={() => handleEditClick(goal)}>Edit</button>
                <button onClick={() => onGoalDeleted(goal.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ManageGoals;
