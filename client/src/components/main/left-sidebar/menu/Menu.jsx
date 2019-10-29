import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li><a href="#">Правовые основы</a></li>
                <li><a href="#">Пресса об арбитражных судах</a></li>
            </ul>
        )
    }
}

export default Menu;