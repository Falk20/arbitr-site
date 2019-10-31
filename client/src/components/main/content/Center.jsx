import React, { Component } from 'react';
import './Content.scss';
import Archves from './archives/Archves';
import Content from './Content';

export default class Center extends Component {
    render() {
        return (
            <div className="center">
                <Archves></Archves>
                <Content></Content>
            </div>
        )
    }
}
