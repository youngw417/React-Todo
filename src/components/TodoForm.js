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

    handleClicktoSave = () => {
        this.props.saveData();
       
    }
    handleClicktoRetrieve = () => {
        this.props.getData();
       
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='todo' placeholder='Enter your todo' value = {this.state.task} onChange={this.handleChanges}/>
                    <div>
                        <div className="btnDiv">
                            <button className="add" type='submit'>Add todo</button>
                            <button className="clear" onClick = {this.handleClick}>Clear Completed</button>
                        </div>
                        <div className="btnDiv">
                            <button className="save" onClick = {this.handleClicktoSave}>Save my todos</button>
                        <button className="retrieve" onClick = {this.handleClicktoRetrieve}>Get my todos</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}

