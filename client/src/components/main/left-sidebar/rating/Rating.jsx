import React, { Component } from 'react';
import "./Rating.scss";

const ratings = [
    {
        url:'http://top100.rambler.ru/top100/',
        img: '/img/rambler.gif'
    },
    {
        url:'http://top.list.ru/jump?from=139176',
        img: '/img/mail.gif'
    }
    
]

export default class Rating extends Component {
    render() {
        return (
            <div className="rating">
                {ratings.map((link) =>
                    <a href={link.url}>
                        <img src={link.img} alt="" />
                    </a>
                )}
            </div>
        )
    }
}
