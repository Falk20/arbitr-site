import React from 'react';
import './LeftSidebar.scss';
import Menu from './menu/Menu.jsx';
import Card from './card/Card';


class LeftSidebar extends React.Component {
    render (){
        return (
            <aside className="left-aside">
                <Menu></Menu>
                <Card></Card>
            </aside>
        )
    }
}

export default LeftSidebar;