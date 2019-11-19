import React, { Component } from 'react';
import Breadcrumbs from './breadcrumbs/Breadcrumbs';
import PageTitle from './page-title/PageTitle';
import JusticeInfo from './justice-info/JusticeInfo';
import SearchRequests from './search-request/SearchRequests';
import PressCentr from './press-centr/PressCentr';
import JusticeLocation from './justice-location/JusticeLocation';
import ArbitrList from './arbitr-list/ArbitrList';

const titles = [
    'Федеральные арбитражные суды Российской Федерации',
    'Поиск',
    'Пресса об арбитражных судах',
    'Суд по интеллектуальным правам'
];

export default class Content extends Component {
    render() {
        let content;

        switch (window.location.pathname) {
            case '/search/':
                content =
                    <>
                        <Breadcrumbs title={[titles[1]]}></Breadcrumbs>
                        <PageTitle title={titles[1]}></PageTitle>
                        <SearchRequests></SearchRequests>
                    </>;
                break;
            case "/press-centr/":
                content =
                    <>
                        <Breadcrumbs title={[titles[2]]}></Breadcrumbs>
                        <PageTitle title={titles[2]}></PageTitle>
                        <PressCentr></PressCentr>
                    </>;
                break;
            case "/sip/":
                content =
                    <>
                        <Breadcrumbs title={[titles[0], titles[3]]}></Breadcrumbs>
                        <PageTitle title={titles[3]}></PageTitle>
                        <JusticeLocation></JusticeLocation>
                    </>
                break;
            case "/okrug/":
                content = <ArbitrList title={[titles[0], 'Арбитражные суды округов']}></ArbitrList>
                break;
            case "/appeal/":
                content = <ArbitrList title={[titles[0], 'Арбитражные апелляционные суды']}></ArbitrList>
                break;
            case "/subj/":
                content = <ArbitrList title={[titles[0], 'Арбитражные суды субъектов РФ']}></ArbitrList>
                break;
            default:
                content =
                    <>
                        <Breadcrumbs title={[titles[0]]}></Breadcrumbs>
                        <PageTitle title={titles[0]}></PageTitle>
                        <JusticeInfo></JusticeInfo>
                    </>;
        }

        return (
            <div className="content">
                {content}
            </div>
        )
    }
}
