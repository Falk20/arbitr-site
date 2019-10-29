import React, { Component } from 'react';
import LeftSidebar from './left-sidebar/LeftSidebar';

export default class Main extends Component {
    render() {
        return (
            <main>
                <LeftSidebar></LeftSidebar>
            </main>
        )
    }
}