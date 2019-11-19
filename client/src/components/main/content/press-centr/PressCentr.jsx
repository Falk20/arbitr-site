import React, { Component } from 'react';
import './PressCentr.scss';

export default class PressCentr extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            body: [],
            publicationDate: "",
            source: ""
        }
    }


    componentDidMount() {
        let ans = window.location.search.split('=')[1];
        fetch('/api/news/' + ans)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        title: result.title,
                        body: result.body.split('\n\n').map((item, id) => <p key={id}>{item}</p>),
                        publicationDate: result.publicationDate,
                        source: result.source
                    })
                }
            );
    }

    render() {
        let date = new Date(this.state.publicationDate);
        return (
            <div className="article">
                <h3>{this.state.title}</h3>
                {this.state.body}
                <p className="source">{this.state.source}, {date.toLocaleDateString()}</p>
            </div>
        )
    }
}
