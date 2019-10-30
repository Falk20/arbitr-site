import React, { Component } from 'react';
import './Breadcrumbs.scss';

export default class Breadcrumbs extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <ul className='breadcrumbs'>
                <li><a href="/">Главная страница</a></li>
                <li>{this.props.title}</li>
            </ul>
        )
    }
}
