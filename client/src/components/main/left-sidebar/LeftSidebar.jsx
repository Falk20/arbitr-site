import React, { Component } from 'react';
import './LeftSidebar.scss';
import Menu from './menu/Menu';
import Card from './card/Card';
import Documents from './documents/Documents';


export default class LeftSidebar extends Component {
    render (){
        return (
            <aside className="left-aside">
                <Menu></Menu>
                <Card></Card>
                <Documents></Documents>
            </aside>
        )
    }
}