import React, { Component } from 'react'

export default class SearchRequest extends Component {
    render() {
        let date = new Date(this.props.res.publicationDate);

        return (
            <li>
                <a href={"/press-centr/?ans=" + this.props.res._id}>
                    <span>
                        {this.props.res.title}
                    </span>
                    <span>, </span>
                    <span>
                        {date.toLocaleDateString()}
                    </span>
                </a>
                <p>{this.props.res.body}</p>
            </li>
        )
    }
}
