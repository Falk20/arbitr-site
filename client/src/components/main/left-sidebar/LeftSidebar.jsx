import React from 'react';
import './LeftSidebar.scss';
import Menu from './menu/Menu';
import Card from './card/Card';


export default class LeftSidebar extends React.Component {
    render (){
        return (
            <aside className="left-aside">
                <Menu></Menu>
                <Card></Card>
            </aside>
        )
    }
}