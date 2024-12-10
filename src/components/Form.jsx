import React, { useState } from 'react'
import { useEffect } from 'react'

function Form({addTodo}) {

    const [todo , setTodo] = useState('')
 useEffect(()=>{
document.body.style.backgroundColor= ""


 })

const handleSubmit=(e)=>{

    e.preventDefault()

addTodo(todo)
console.log(todo)
setTodo('')

}

  return (
    <form action="" onSubmit={handleSubmit} >

<input 
value ={todo}
onChange={(e) =>setTodo(e.target.value)}
type="text" 

/>

<button  >Add task</button>

</form>
  )
}

export default Form