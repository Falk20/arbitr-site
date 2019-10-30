import React, { Component } from 'react';
import './JusticeInfo.scss';
import JusticeList from './justice-list/JusticeList';
import JusticeSearch from './justice-search/JusticeSearch';
import Info from './info/Info';

export default class JusticeInfo extends Component {
    render() {
        return (
            <div className="justice-info">
                <JusticeList></JusticeList>
                <JusticeSearch></JusticeSearch>
                <Info></Info>
            </div>
        )
    }
}
