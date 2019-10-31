import React, { Component } from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import PageTitle from './page-title/PageTitle';
import JusticeInfo from './justice-info/JusticeInfo';

const title = 'Федеральные арбитражные суды Российской Федерации'

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Breadcrumbs title={title}></Breadcrumbs>
                <PageTitle title={title}></PageTitle>
                <JusticeInfo></JusticeInfo>
            </div>
        )
    }
}
