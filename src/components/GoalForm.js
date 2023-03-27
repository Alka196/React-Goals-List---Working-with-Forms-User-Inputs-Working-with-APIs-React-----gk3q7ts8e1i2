import React, { useState } from "react";
import ListOfGoals from "./ListOfGoals";

const GoalForm = ({ onAddGoal }) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
    const handleAdd = (e) => {
      e.preventDefault();
      onAddGoal(formData);
      setFormData({ goal: "", by: "" });
    };

  
    // const handleAdd = (e) => {
    //   e.preventDefault();
    //   const values = {...formData};
    //   //values[index].value = e.target.value;
    //   // setFormData({
    //   //   goalName:(goal.e.target.value),
    //   //   goalDeadline:(by.e.target.value)
    //   // });
     
    //   setFormData(values)
    // };
  
    return (
      <>
        <h1>My Goals</h1>
        <form>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
             onChange={(e) =>  setFormData({ ...formData, goal: e.target.value })}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={(e) => setFormData({ ...formData, by: e.target.value })}
           
          />
         
          <button onClick={handleAdd}>Add</button>
        </form>
        {/* <ListOfGoals goalName={goal.target.value} goalDeadline={by.target.value}/> */}
      </>
    )
}

export default GoalForm;