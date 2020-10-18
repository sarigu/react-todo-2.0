import React, { Component } from 'react';
import Todo from '../components/todo';

export default class Todos extends Component {

    render() {
        return (
            <div >
                <ul className={"todoList"}>
                    {this.props.todos && this.props.todos.map(todo => <Todo key={todo.id} onDelete={this.props.onDelete} todo={todo} />)}
                </ul>
            </div >
        );
    }
}