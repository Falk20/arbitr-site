import React, { Component } from 'react';
import './Main.scss';
import LeftSidebar from './left-sidebar/LeftSidebar';
import Content from './content/Content';
import RightSidebar from './right-sidebar/RightSidebar';

export default class Main extends Component {
    render() {
        return (
            <main>
                <LeftSidebar></LeftSidebar>
                <Content></Content>
                <RightSidebar></RightSidebar>
            </main>
        )
    }
}