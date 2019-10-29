import React, {Component} from 'react';
import './LeftSidebar.scss';
import Menu from './menu/Menu.jsx';


class LeftSidebar extends Component {
    render (){
        return (
            <aside className="left-aside">
                <Menu></Menu>
            </aside>
        )
    }
}

export default LeftSidebar;