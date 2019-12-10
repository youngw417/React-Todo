import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './Todo.css';


// const todos = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   },
//   {
//     task: 'clean dishes',
//     id: 152881707723232,
//     completed: true
//   },
//   {
//     task: 'trash Cookies',
//     id: 15288170843422,
//     completed: false
//   }
// ];
  

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      todos:[]
    }
 }
 // add todos



addTodo = (item) => {
  if (item) {
  const newItem = {
    task: item,
    id: Date.now(),
    completed: false
  }
 this.setState({
   todos: [...this.state.todos, newItem]
 });
  }
}


 // change to completed todos 
// 
todoCompleted = (item) => {

//  const newTodos = [...this.state.todos];

this.setState({
  todos: this.state.todos.map(each => {
    if (each.id === item.id) {
    return {...each, completed: !each.completed}
  } else {
    return each }
  }
  )

})

//      newTodos.forEach((cur) => {
//       if (cur.id === item.id && !item.completed) cur.completed = true
//       else cur.completed = false
//   })

console.log('todos', this.state.todos);
  // this.setState({todos: newTodos});
}
 
 


 // clear completed
deleteTodo = () => {

  const filtered = this.state.todos.filter(item => !item.completed);

  this.setState({
    todos: filtered
  })

};

saveData = () => {
    window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
    
}

getData = () => {
  
  const dataRetrieved = JSON.parse(window.localStorage.getItem('todos'));
  this.setState({
    todos: dataRetrieved});
}


  
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Welcome to your Todo App!</h1>
        <dir className='grid-2'>
          <dir className="grid-left">
            <TodoForm addTodo = {this.addTodo} deleteTodo = {this.deleteTodo} saveData={this.saveData} getData={this.getData}/>
          </dir>
          <dir className="grid-right">
            <TodoList todos={this.state.todos} todoCompleted={this.todoCompleted}/>
          </dir>
        </dir>
        
      </div>
    );
  }
}
export default App;
