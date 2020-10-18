import React, { Component } from 'react';
import EmojiPicker from '../components/emojiPicker';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.addTodoInput = React.createRef();
    }

    componentDidUpdate = () => {
        this.addTodoInput.current.value = "";
    }

    render() {
        return (
            <div className={"todoForm"}>
                <EmojiPicker onAddedEmoji={this.props.onAddedEmoji} ref={this.emojiPicker} />
                <div className={"inputContainer"}>
                    <input className={"formInput"} type="text" placeholder="add a task" ref={this.addTodoInput}></input>
                    <button className={"formBtn"} onClick={this.props.onAdded}>Add</button>
                </div>
            </div>
        );

    }
}

