import React, { Component } from 'react';
import './Breadcrumbs.scss';

export default class Breadcrumbs extends Component {
    render() {
        return (
            <ul className='breadcrumbs'>
                <li><a href="/">Главная страница</a></li>
                <span>&#9658;</span>
                <li>{this.props.title}</li>
            </ul>
        )
    }
}
