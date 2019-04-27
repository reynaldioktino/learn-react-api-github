import React, { Component } from 'react'

export default class Card extends React.Component {

    render() {
        return (
            <li>
                <a href={ this.props.link }>{ this.props.name }</a>
            </li>
        )
    }
}
