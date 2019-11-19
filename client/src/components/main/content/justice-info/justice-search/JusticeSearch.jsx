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
                <option value="/okrug/">Арбитражные суды округов</option>
                <option value="/appeal/">Арбитражные аппеляционные суды</option>
                <option value="/subj/">Арбитражные суды субъектов РФ</option>
            </select>
        )
    }
}
