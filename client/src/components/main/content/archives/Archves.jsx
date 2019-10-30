import React, { Component } from 'react';
import './Archives.scss';
import Archive from './Archive';

const archivesList = [
    {
        link: '#',
        text: 'Постановления Пленума ВАС РФ (АРХИВ)'
    },
    {
        link: '#',
        text: 'Информационные письма Президиума ВАС РФ (АРХИВ)'
    },
    {
        link: '#',
        text: 'Постановления Президиума ВАС РФ (АРХИВ)'
    },
    {
        link: '#',
        text: 'Правовые позиции Президиума ВАС РФ (АРХИВ)'
    }
]

export default class Archves extends Component {
    render() {
        return (
            <ul className='archives'>
                {archivesList.map((archive) =>
                    <Archive link={archive.link} text={archive.text}></Archive>
                )}
            </ul>
        )
    }
}
