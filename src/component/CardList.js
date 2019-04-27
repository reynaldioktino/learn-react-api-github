import React, { Component } from 'react'

import Card from "./Card";

export default class CardList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.repos.map(repo => (
                    <Card key={repo.id} name={repo.name} link={repo.html_url} />
                ))}
            </ul>
        )
    }
}
