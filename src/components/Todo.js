import React from 'react'

function Todo({todo, todoCompleted}) {
    
    const handleClick = ()=> {
        todoCompleted(todo);
    
       

    }
    
    return (
        <div>
          <p onClick = {handleClick} className ={todo.completed && 'completed' }>
              {todo.task} {':'} {Date(todo.id).toString().substring(0,15)}
         </p>  
        </div>
    )
}

export default Todo
