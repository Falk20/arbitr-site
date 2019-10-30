import React, { Component } from 'react';
import './PageTitle.scss';

export default class PageTitle extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <h2 class='page-title'>{this.props.title}</h2>
        )
    }
}
