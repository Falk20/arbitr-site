import React, { Component } from 'react';
import './Breadcrumbs.scss';

export default class Breadcrumbs extends Component {
    render() {
        return (
            <ul className='breadcrumbs'>
                <li><a href="/">Главная страница</a></li>
                {this.props.title.map((item, id) =>
                    <li key={id}>
                        <span>&#9658;</span>
                        {item}
                    </li>
                )}
            </ul>
        )
    }
}
