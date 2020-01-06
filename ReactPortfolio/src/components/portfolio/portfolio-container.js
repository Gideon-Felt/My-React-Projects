import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    constructor() {
        super()
        
        // Initial State
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                { title: "Quip", category: "eCommerce", slug: 'quip' },
                { title: "EventBrite", category: "Scheduling", slug: 'eventbrigte' },
                { title: "Ministry Safe", category: "Enterprise", slug: 'ministry-safe' },
                { title: "SwingAway", category: "eCommerce", slug: 'swingaway' }
            ]
        }
        this.handleFilter = this.handleFilter.bind(this)
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            }) 
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug = {item.slug}/> // props are the names = value and are called in the item call
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }


    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}       


            </div>
        )
    }
}