import React, { Component } from 'react';
import './JusticeLocation.scss';
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, RulerControl, TrafficControl, TypeSelector, ZoomControl } from 'react-yandex-maps';

let justice = {
    name: 'Суд по интеллектуальным правам',
    contact: [
        {
            view: 'Адрес',
            value: '127254, Москва, Огородный проезд, д. 5, стр. 2'
        },
        {
            view: 'Временной пояс',
            value: 'МСК'
        },
        {
            view: 'Индекс (код) суда',
            value: 'СИП'
        },
        {
            view: 'Телефон',
            value: '(495)982-09-30'
        },
        {
            view: 'E-mail',
            value: 'info@ipc.arbitr.ru'
        },
        {
            view: 'Сайт',
            value: 'http://ipc.arbitr.ru'
        },
        {
            view: 'Председатель',
            value: 'Новоселова Людмила Александровна'
        }
    ],
    schedule: [
        {
            days: 'Понедельник - четверг',
            officeHours: '9.00 - 18.00',
            break: '13.00-13.45'
        },
        {
            days: 'Пятница',
            officeHours: '9.00 - 16.45',
            break: '13.00-13.45'
        }
    ],
    leadership: [
        {
            position: 'Председатель',
            name: 'Новоселова Л.А.'
        }
    ],
    LocationMap: [55.809806, 37.607338]
}

export default class JusticeLocation extends Component {
    render() {
        return (
            <div className="justice-location">
                <h2>{justice.name}</h2>
                <div className="with-image">
                    <img src="/img/SIP.jpg" alt="Суд по интеллектуальным правам" />
                    <div className="contact">
                        <h4>Контакты</h4>
                        <ul>
                            {justice.contact.map((item, id) =>
                                <li key={id}>
                                    <span>{item.view}:</span>
                                    <span>
                                        {item.view != 'Сайт' ?
                                            item.view != 'E-mail' ?
                                                item.value :
                                                <a href={"mailto:" + item.value}>{item.value}</a> :
                                            <a href={item.value}>{item.value}</a>}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="schedule">
                    <h4>Режим работы</h4>
                    <ul>
                        {justice.schedule.map((item, id) =>
                            <li key={id}>
                                <span>{item.days}</span>
                                <span>{`${item.officeHours}, ${item.break}`}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="leadership">
                    <h4>Руководство</h4>
                    <ul>
                        {justice.leadership.map((item, id) =>
                            <li>
                                <span>{item.position}</span>
                                <span>{item.name}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="location-map">
                    <h4>Схема проезда</h4>
                    <YMaps>
                        <Map defaultState={{
                            center: justice.LocationMap,
                            zoom: 16,
                            controls: [],

                        }} width="100%" height="400px">
                            <Placemark
                                geometry={justice.LocationMap}
                                properties={{
                                    balloonContent: justice.contact[0].value
                                }}
                                modules={['geoObject.addon.balloon']}
                                options={{ preset: 'islands#dotIcon' }}
                            />
                            <FullscreenControl />
                            <GeolocationControl options={{ float: 'left' }} />
                            <RulerControl options={{ float: 'right' }} />
                            <TrafficControl options={{ float: 'right' }} />
                            <TypeSelector options={{ float: 'right' }} />
                            <ZoomControl options={{ float: 'right' }} />
                        </Map>
                    </YMaps>
                </div>
            </div>
        )
    }
}
