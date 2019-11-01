import React, { Component } from 'react';
import './PressCentr.scss';

export default class PressCentr extends Component {
    constructor(props) {
        super(props)

        this.state = {
            article: {}
        }
    }


    componentDidMount() {
        let ans = window.location.search.split('=')[1];
        fetch('/api/news/' + ans)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        article: result
                    })
                }
            );
    }

    render() {
        let date = new Date(this.state.article.publicationDate);

        return (
            <div className="article">
                <h3>{this.state.article.title}</h3>
                <p>{this.state.article.body}</p>
                <p className="source">{this.state.article.source}, {date.toLocaleDateString()}</p>
            </div>
        )
    }
}
