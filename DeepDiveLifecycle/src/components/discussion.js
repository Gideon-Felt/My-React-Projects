import React, { Component } from 'react';

export default class Discussion extends Component {
    constructor() {
        super()

        this.state = {
            pageTitle: "Discussion",
            currentTime: String(new Date())
        }
    }

    componentDidMount() {
        this.liveTime = setInterval(() => {
            console.log("new chat message")
            this.setState({currentTime: String(new Date()) })
        }, 1000) 
    }

    componentWillUnmount() {
        clearInterval(this.liveTime)
    }

    render() {
        //SHORT CUT FOR ITEMS IN STATE OBJECT
        const { pageTitle, currentTime } = this.state

        return(
            <div>
                <h1>
                    {pageTitle}
                </h1>
                <div>
                    {currentTime}
                </div>
            </div>
        )
    }
}