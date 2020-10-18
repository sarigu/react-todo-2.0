import React, { Component } from 'react';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.todoListItem = React.createRef();
    }

    render() {
        return (
            <li className={"todo"} ref={this.todoListItem}>
                <span role="img" aria-label="emoji">{this.props.todo.emoji}</span>
                <p>{this.props.todo.todo}</p>
                <div className={"todoButtons"}>
                    <button onClick={this.changeBackgroundColor}>&#9989;</button>
                    <button onClick={() => this.props.onDelete(this.props.todo.id)}>&#x1f5d1;</button>
                </div>
            </li>
        );
    }

    changeBackgroundColor = () => {
        this.todoListItem.current.classList.toggle("todoDone");
    }


}

