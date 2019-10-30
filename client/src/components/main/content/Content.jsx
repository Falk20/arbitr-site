import React, { Component } from 'react';
import './Content.scss';
import Archves from './archives/Archves';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import PageTitle from './page-title/PageTitle';
import JusticeInfo from './justice-info/JusticeInfo';

const title = 'Федеральные арбитражные суды РФ'

export default class Content extends Component {
    render() {
        return (
            <div className="center">
                <Archves></Archves>
                <div className="content">
                    <Breadcrumbs title={title}></Breadcrumbs>
                    <PageTitle title={title}></PageTitle>
                    <JusticeInfo></JusticeInfo>
                </div>
            </div>
        )
    }
}
