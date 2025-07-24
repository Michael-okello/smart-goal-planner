import react from "react"
import {useState, useEffect} from "react"

function ProgressCard () {

    const [goals, setGoals] = useState([])

    useEffect (() => {
        fetch("https://json-server-deployment-smart-goal-planner.onrender.com/goals")
        .then(res => res.json())
        .then(data => setGoals(data))
    },[])

    }
    return(
        <section>
            
        </section>
    )


export default ProgressCard