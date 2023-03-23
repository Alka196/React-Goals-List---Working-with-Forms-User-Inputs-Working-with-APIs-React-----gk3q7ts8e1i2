import React, { useState } from "react";

const GoalForm = () => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });

    // function handleAdd(event){
    //   event.preventDefault();
    //    //return setFormData((e)=>{e.target.valuee})
    // }
    const handleChange = (e) => {
      e.preventDefault();
      const values = [...formData];
      //values[index].value = e.target.value;
      setFormValues(values);
    };
  
    return (
      <>
        <h1>My Goals</h1>
        <form>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
             onChange={(e) => setFormData(e.target.value)}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={(e) => setFormData(e.target.value)}
           
          />
          <button onClick={handleChange} >Add</button>
        </form>
      </>
    )
}

export default GoalForm;