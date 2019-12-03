import React, { Component } from 'react'

export default class TodoForm extends Component {

    constructor(){
        super();
        this.state={
            task: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.task);
        this.setState({
            task: ''
        });

    }

    handleChanges = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleClick = () => {
        this.props.deleteTodo();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='todo' placeholder='Enter your todo' value = {this.state.task} onChange={this.handleChanges}/>
                    <div>
                        <button className="add" type='submit'>Add todo</button>
                        <button className="clear" onClick = {this.handleClick}>Clear Completed</button>
                        
                    </div>
                </form>
            </div>
        )
    }
}

