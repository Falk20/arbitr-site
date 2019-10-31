import React, { Component } from 'react';
import './Main.scss';
import LeftSidebar from './left-sidebar/LeftSidebar';
import RightSidebar from './right-sidebar/RightSidebar';
import Center from './content/Center';

export default class Main extends Component {
    render() {
        return (
            <main>
                <LeftSidebar></LeftSidebar>
                <Center></Center>
                <RightSidebar></RightSidebar>
            </main>
        )
    }
}