import React, { useState, useEffect } from "react";

function ProgressCard() {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
    fetch("https://json-server-deployment-smart-goal-planner.onrender.com/goals")
    .then(res => res.json())
    .then(data => setGoals(data));
    }, []);

    return (
    <div className="card">
    <h2>Goal Card</h2>
    {goals.map(goal =>(
        <div key={goal.id} className="goal-card">
            <h3>{goal.name}</h3>
            <p><strong>Category:</strong>{goal.category}</p>
            <p><strong>Target Amount:</strong>${goal.targetAmount}</p>
            <p><strong>Saved Amount:</strong> ${goal.savedAmount}</p>
            <p><strong>Deadline:</strong> {goal.deadline}</p>
            <p>
                <strong>Progress:</strong>{" "}
                 {Math.round((goal.savedAmount / goal.targetAmount) * 100)}%
            </p>
        </div>
    ))}
    <p>Your goals</p>
    </div>
    );
}

export default ProgressCard;
