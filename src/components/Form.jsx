import React, { useState } from 'react'
import { useEffect } from 'react'

function Form({ addTodo, edit, updateItem }) {
//  console.log(edit)
  const [todo, setTodo] = useState()

  useEffect(() => {
    document.body.style.backgroundColor = ""


  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()
    if (edit.isEdit === false ) {
      addTodo(todo);
      console.log("todo")

    }
    else {

      updateItem(edit.task.id , todo);
    
    }


    console.log(todo)
    setTodo('')

  }

  useEffect(() => {
    setTodo(edit.task.title)
  }, [edit])

  return (
    <form action="" onSubmit={handleSubmit} >

      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"

      />

      <button  >Add task</button>

    </form>
  )
}

export default Form