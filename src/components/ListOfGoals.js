import React from "react";
import GoalForm from "./GoalForm";

const ListOfGoals = (props) => {

  const {goalName, goalDeadline}=props

    return (
      <ul>
        <li>
            <p>My goal is to {goalName}, by {goalDeadline}.</p>
          </li>
      </ul>
    );
}

export default ListOfGoals;