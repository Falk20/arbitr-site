import React, { Component } from 'react'

export default class Document extends Component {
    render() {
        return (
            <li key={this.props.doc}>
                <a href="#">
                    <img src="/img/icon_doc.gif" alt="" />
                    <span>{this.props.doc}</span>
                </a>
            </li>
        )
    }
}
