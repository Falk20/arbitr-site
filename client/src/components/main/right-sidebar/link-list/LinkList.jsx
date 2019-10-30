import React, { Component } from 'react';
import './LinkList.scss';

const links = [
    {
        url: 'http://www.supcourt.ru/',
        text: 'ВЕРХОВНЫЙ СУД РФ'
    },
    {
        url: 'http://www.cdep.ru/',
        text: 'СУДЕБНЫЙ ДЕПАРТАМЕНТ ПРИ ВЕРХОВНОМ СУДЕ РФ'
    },
    {
        url: 'http://www.ssrf.ru/',
        text: 'СОВЕТ СУДЕЙ РФ'
    },
    {
        url: 'http://www.vkks.ru/',
        text: 'Высшая квалификационная коллегия судей РФ'
    },
    {
        url: 'http://gov.ru/',
        text: 'Официальная Россия - сервер органов государственной власти РФ'
    },
    {
        url: 'http://zakupki.gov.ru/epz/main/public/home.html',
        text: 'ПОРТАЛ ЗАКУПОК Официальный сайт РФ в сети «Интернет» для размещения информации о размещении заказов на поставки товаров, выполнение работ, оказание услуг'
    },
    {
        url: 'http://pravo.gov.ru/',
        text: 'Официальный интернет-портал правовой информации'
    },
]

export default class LinkList extends Component {
    render() {
        return (
            <ul className="third-party">
                {links.map((link)=>
                    <li><a href={link.url}>{link.text}</a></li>
                )}
            </ul>
        )
    }
}
