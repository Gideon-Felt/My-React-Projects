import React, { Component } from 'react';
import axios from 'axios'

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
            data: []
        }
        this.handleFilter = this.handleFilter.bind(this)
    }

    getPortfolioItems() {
        axios.get('https://gdfelt.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          console.log(response);
          this.setState({
              data: response.data.portfolio_items
          })
        })
        .catch(error => {
          console.log(error);
        })
      }


    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            }) 
        })
    }

    portfolioItems() {
        // Data that we'll need:
        // - background image: thumb_image_url
        // - logo
        // - description: description
        // - id: id
        // ["id", "name", "description", "url", "category", "position", "thumb_image_url", "banner_image_url", "logo_url", "column_names_merged_with_images"]
        return this.state.data.map(item => {
            console.log("Portfolio Item", item)
            return <PortfolioItem key={item.id} item={item}/> // props are the names = value and are called in the item call
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
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
                
                <div className="portfolio-items-wrapper">
                {this.portfolioItems()} 
                </div>
                   


            </div>
        )
    }
}