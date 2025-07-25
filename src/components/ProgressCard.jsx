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
    {JSON.stringify(goals)}
    <p>Your goals</p>
    </div>
    );
}

export default ProgressCard;
