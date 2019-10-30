import React, { Component } from 'react';
import './RightSidebar.scss';
import Search from './search/Search';
import LinkList from './link-list/LinkList';

export default class RightSidebar extends Component {
    render() {
        return (
            <aside>
                <Search></Search>
                <LinkList></LinkList>
                <img src="/img/stat51.gif" alt=""/>
            </aside>
        )
    }
}
