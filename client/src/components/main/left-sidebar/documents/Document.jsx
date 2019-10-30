import React, { Component } from 'react'

export default class Document extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <a href="#">
                    <img src="/img/icon_doc.gif" alt="" />
                    <span>{this.props.doc}</span>
                </a>
            </li>
        )
    }
}
