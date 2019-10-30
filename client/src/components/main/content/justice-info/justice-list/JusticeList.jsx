import React, { Component } from 'react';
import './JusticeList.scss';

const justiceArr = [
    {
        link: '/okrug/',
        text: 'Арбитражные суды округов'
    },
    {
        link: '/appeal/',
        text: 'Арбитражные апелляционные суды'
    },
    {
        link: '/subj/',
        text: 'Арбитражные суды субъектов РФ'
    },
    {
        link: '/sip/',
        text: 'Суд по интеллектуальным правам'
    }
]

export default class JusticeList extends Component {
    render() {
        return (
            <ul className='justice-list'>
                {justiceArr.map((justice, id)=>
                    <li key={id}><a href={justice.link}>{justice.text}</a></li>
                )}
            </ul>
        )
    }
}
