// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import Todo from './Todo';

import React from 'react'

function TodoList({todos, todoCompleted}) {
    return (
        <div>
            <h3 style={{borderBottom:'2px solid black', width: '60%', marginLeft: '6rem' }}>My current todos....</h3>
            {
                todos.map(todo => (
                    <Todo key = {todo.id} todo={todo} todoCompleted = {todoCompleted}/>
                )
                    )
            }
        </div>
    )
}

export default TodoList

