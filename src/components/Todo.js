import React from 'react'

function Todo({todo, completedItems}) {
    
    const handleClick = ()=> {
        completedItems(todo);
    
       

    }
    
    return (
        <div>
          <p onClick = {handleClick} className ={todo.completed && 'completed' }>
              {todo.task}
         </p>  
        </div>
    )
}

export default Todo
