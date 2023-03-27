import React from "react";
import GoalForm from "./GoalForm";

const ListOfGoals = ({allGoals}) => {
// 
  // const {goalName, goalDeadline}=props

    return (
      
      <ul>
        {allGoals.map((goal,index)=>(<li key={index}>
            <p>My goal is to {goal.goal}, by {goal.by}.</p>
          </li>))}
        
      </ul>
    );
}

export default ListOfGoals;