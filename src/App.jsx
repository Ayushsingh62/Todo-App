import React, { useState } from 'react'
import './App.css'
import Navabr from './components/Navabr'
import Form from './components/Form'
import List from './components/List'

function App() {
 
  const [tasks , setTasks]=useState([])
  const [edit, setEdit]=useState({ task: {}, isEdit:false })


  const addTodo = (todo) =>{
 
  let newTodo = {
id : crypto.randomUUID(),
//  tasks.length +1 ,
title : todo,
iscompleted :" False"


    }
  
setTasks([...tasks, newTodo])
  }

  const deleteTodo = (id)=>{

    setTasks(tasks.filter((task)=> task.id !==id))

  }
const editItem = (todo)=>{
  setEdit({ task:todo, isEdit:true })
console.log(edit,"true")

}
// update
const updateItem =(oldId , newtitle)=>{


setTasks(tasks.map((task)=>
task.id=== oldId ? {id:oldId , title:newtitle} : task
))
setEdit({ task: {}, isEdit:false })

}
  // const changemode=()=>{
  //   document.body.style.backgroundColor= "black"
  // }
  


  
  return (
    <>
    <div className="main-container">

<Navabr/>

<div className="container">
{/* <button onClick={chnagemode}  >Change mode</button> */}

<Form addTodo = {addTodo} edit={edit} updateItem={updateItem} />
{
tasks.map((task)=>(
<List  key={task.id} task={task} deleteTodo={deleteTodo}  editItem={editItem}/>


))

}


</div>

    </div>
    
    </>
  )
}

export default App