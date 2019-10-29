import React from 'react';
import './Menu.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <ul className="menu">
                <li><a href="#">Правовые основы</a></li>
                <li><a href="#">Пресса об арбитражных судах</a></li>
            </ul>
        )
    }
}