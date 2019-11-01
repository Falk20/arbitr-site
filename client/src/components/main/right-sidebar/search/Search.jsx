import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             request: ""
        }
    }
    

    onSubmit = (e) => {
        e.preventDefault();
        window.location.replace('/search/?req=' + this.state.request);
    }

    onInput = (e)=> {
        this.setState({
            request: e.target.value
        })
    }

    render() {
        return (
            <div className="search">
                <h3>Поиск по сайту</h3>
                <form onSubmit={this.onSubmit}>
                    <input type="search" name="" id="" onInput={this.onInput}/>
                    <input type="image" src="/img/search.svg" alt="" />
                </form>
            </div>
        )
    }
}
