import React, { Component } from 'react';
import LeftSidebar from './left-sidebar/LeftSidebar';

class Main extends Component {
    render() {
        return (
            <main>
                <LeftSidebar></LeftSidebar>
            </main>
        )
    }
}

export default Main;