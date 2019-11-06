import React, { Component } from 'react';
import './JusticeSearch.scss';

export default class JusticeSearch extends Component {
    onChange = (e) => {
        e.preventDefault();
        window.location = e.target.value;
    }

    render() {
        return (
            <select onChange={this.onChange} className="justice-search">
                <option value="/">Информация об арбитражных судах</option>
                <option value="/sip/">Суд по интеллектуальным правам</option>
            </select>
        )
    }
}
