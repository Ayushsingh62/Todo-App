import React from 'react'

function List({task , deleteTodo}) {
    // console.log(task)
    
  return (
    
<ul>

<li> {task.id} {task.title} {task.iscompleted} 
    <button onClick={()=> deleteTodo(task.id)}>Delete</button> </li>

</ul>
  )
}

export default List