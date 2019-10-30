import React, { Component } from 'react';
import './PageTitle.scss';

export default class PageTitle extends Component {
    render() {
        return (
            <h2 className='page-title'>{this.props.title}</h2>
        )
    }
}
