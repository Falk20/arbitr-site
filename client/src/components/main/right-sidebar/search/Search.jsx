import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
    render() {
        return (
            <form className="search">
                <h3>Поиск по сайту</h3>
                <input type="search" name="" id=""/>
                <input type="image" src="/img/search.gif" alt=""/>
            </form>
        )
    }
}
