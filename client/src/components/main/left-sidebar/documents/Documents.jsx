import React, { Component } from 'react';
import './Documents.scss';
import Document from './Document';


const docsList = [
    'Регламент Арбитражных судов Российской Федерации',
    'Альтернативная процедура урегулирования споров с участием посредника - процедура медиации',
    'Подача документов в арбитражные суды в электронном виде',
    'Банк решений арбитражных судов',
    'Картотека арбитражных дел',
    'Календарь судебных заседаний арбитражных судов',
    'Решения арбитражных судов по заявлениям о признании нормативных актов недействующими',
    'Решения о назначении арбитражным управляющим наказания в виде дисквалификации',
    'Подать жалобу на действия судей и работников аппаратов арбитражных судов'
];

export default class Documents extends Component {
    render() {
        return (
            <ul className="documents">
                {docsList.map((doc, id) =>
                   <Document doc={doc} key={id}></Document>
                )}
            </ul>
        )
    }
}