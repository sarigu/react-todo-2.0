import React from 'react';

export default class Theme extends React.Component {
    render() {
        return (
            <div className={"color-changer"}>
                Choose a color theme
                <input type="color" onChange={(event) => this.props.onColorChange(event.target.value)} />
            </div>
        );
    }
}