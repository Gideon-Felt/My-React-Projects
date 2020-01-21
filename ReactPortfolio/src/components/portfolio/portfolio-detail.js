import React, { Component } from 'react';
import Axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.getPortfolioItem()
    }

    getPortfolioItem() {
        Axios.get(`https://gdfelt.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`, { withCredentials: true }).then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log("getPortfolioItem error", error)
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio detail for {this.props.match.params.slug}</h2>
            </div>
        )
    }
    
}