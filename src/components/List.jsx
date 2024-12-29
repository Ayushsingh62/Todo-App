import React from 'react'

function List({task , deleteTodo , editItem}) {
    // console.log(task)
    
  return (
    <div>
<ul>

<li> 
  
  <p>{task.id} </p>
  <h2>{task.title}  </h2> 
  <h2> {task.iscompleted}  </h2>

  <span>   
     <button onClick={()=> deleteTodo(task.id)}>Delete</button> 
    <button onClick={()=> editItem(task)}>Edit</button>

</span> </li>
</ul></div>
  )
}

export default List 