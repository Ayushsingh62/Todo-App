import React, { useState } from 'react'
import './App.css'
import Navabr from './components/Navabr'
import Form from './components/Form'
import List from './components/List'

function App() {
 
  const [tasks , setTasks]=useState([

  ]


  )


  const addTodo = (todo) =>{
 
  let newTodo = {
id : tasks.length +1 ,
title : todo,
iscompleted :" False"


    }
  
setTasks([...tasks, newTodo])




  }

  const deleteTodo = (id)=>{

    setTasks(tasks.filter((task)=> task.id !==id))

  }
  return (
    <>
    <div className="main-container">

<Navabr/>

<div className="container">
<Form addTodo = {addTodo}/>
{
tasks.map((task)=>(
<List task={task} deleteTodo={deleteTodo} />


))

}


</div>

    </div>
    
    </>
  )
}

export default App