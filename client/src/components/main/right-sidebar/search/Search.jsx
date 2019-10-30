import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <h3>Поиск по сайту</h3>
                <form >
                    <input type="search" name="" id="" />
                    <input type="image" src="/img/search.gif" alt="" />
                </form>
            </div>
        )
    }
}
