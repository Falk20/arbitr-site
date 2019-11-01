import React, { Component } from 'react'
import './SearchRequests.scss';
import SearchRequest from './SearchRequest'

export default class SearchRequests extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchRes: []
        }
    }

    componentDidMount() {
        fetch('/api/news/' + window.location.search)
            .then(res => res.json())
            .then(
                (result)=>{
                    if(!!Object.keys(result).length) {
                        this.setState({
                            searchRes: result
                        })
                    }       
                }
            );
    }

    render() {
        return (
            <div className="search-requests">
                <p className="counter">Документов найдено: {this.state.searchRes.length}</p>
                <ol>
                    {this.state.searchRes.map((res) => (
                        <SearchRequest res={res}></SearchRequest>
                    ))}
                </ol>
            </div>
        )
    }
}
