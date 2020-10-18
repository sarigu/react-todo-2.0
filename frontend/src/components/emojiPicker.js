import React, { Component } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

export default class EmojiPicker extends Component {

    constructor(props) {
        super(props);
        this.emojiPicker = React.createRef();
    }

    componentDidUpdate = () => {
        if (this.emojiPicker.current.classList.contains("emojiList")) {
            this.emojiPicker.current.classList.remove("emojiList");
        }
    }

    render() {
        return (
            <div className="emojiContainer">
                <div className="emojiLabel" onClick={this.showEmojis} >Add an emoji &#128522;</div>
                <div className="reactions" ref={this.emojiPicker}>
                    <Picker
                        showPreview={false}
                        showSkinTones={false}
                        onSelect={(emoji) => { this.props.onAddedEmoji(emoji.native) }}
                    />
                </div>
            </div>

        );
    }

    showEmojis(e) {
        //next sibling is the emoji picker
        e.target.nextSibling.classList.toggle("emojiList");
    }

}
