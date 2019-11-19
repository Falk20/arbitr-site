import React, { Component } from 'react';
import './ArbitrList.scss';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import PageTitle from '../page-title/PageTitle';
import JusticeList from '../justice-info/justice-list/JusticeList';
import JusticeSearch from '../justice-info/justice-search/JusticeSearch';

export default class ArbitrList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch('/api/justice/?title=' + window.location.pathname.slice(1, -1))
            .then((res) => res.json())
            .then((result)=>{
                this.setState({list: result.list});
            });
    }

    render() {
        return (
            <>
                <Breadcrumbs title={this.props.title}></Breadcrumbs>
                <PageTitle title={this.props.title[1]}></PageTitle>
                <JusticeList></JusticeList>
                <JusticeSearch></JusticeSearch>
                <div className='arb-list'>
                    <img src={"/img/" + window.location.pathname.slice(1, -1) + ".gif"} alt="Карта" />
                    <ul>
                        {this.state.list.map((item, id) =>
                            <li key={id}>
                                <a href="#">►{item}</a>
                            </li>)}
                    </ul>
                </div>
            </>
        )
    }
}
