import React from 'react';
import LeftSidebar from './left-sidebar/LeftSidebar';

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <LeftSidebar></LeftSidebar>
            </main>
        )
    }
}