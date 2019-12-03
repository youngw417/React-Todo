// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo';

import React, {useState, useEffect} from 'react'

function TodoList({todos, todoCompleted}) {

    // const [myCom, setMycom] = useState();

    const completedItems = (another) => {
       
        // setMycom(another)

        todoCompleted(another)
       
        
        
    }
    
 
//     useEffect(()=> {
//         todoCompleted(myCom);
//     },[myCom])

//    console.log('myCom', myCom)


    return (
        <div>
            <h3 style={{borderBottom:'2px solid black', width: '60%', marginLeft: '6rem' }}>My current todos....</h3>
            {
                todos.map(todo => (
                    <Todo key = {todo.id} todo={todo}  completedItems ={completedItems}/>
                )
                    )
            }
        </div>
    )
}

export default TodoList

