import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);

  const handleGoals=(newGoal)=>{
    setAllGoals([...allGoals,newGoal])
  }
  return (
    <div id="main">
      <GoalForm onAddGoal={handleGoals}/>
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
  
}


export default App;
