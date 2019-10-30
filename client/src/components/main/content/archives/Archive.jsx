import React, { Component } from 'react'

export default class Archive extends Component {
    render() {
        return (
            <li>
                <a href={this.props.archive.link}>
                    {this.props.archive.text}
                </a>
            </li>
        )
    }
}
