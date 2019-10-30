import React, { Component } from 'react'

export default class Archive extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <a href={this.props.link}>
                    {this.props.text}
                </a>
            </li>
        )
    }
}
