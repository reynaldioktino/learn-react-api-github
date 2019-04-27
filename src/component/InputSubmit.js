import React, { Component } from 'react'

export default class InputSubmit extends React.Component {

    state = {
        value: ''
    }

    changeValue(value) {
        this.setState({ value: value})
    }

    submitValue() {
        this.props.onSubmit(this.state.value)
    }

    render() {
        return (
            <div>
                <input 
                type="text" 
                placeholder={this.props.placeholder}
                onChange={event => this.changeValue(event.target.value)} 
                value={this.state.value}
                />
                <button onClick={() => this.submitValue()}>{this.props.buttonText}</button>
            </div>
        )
    }
}
