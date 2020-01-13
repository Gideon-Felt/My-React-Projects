import React, { Component} from 'react'
import axios from "axios"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorText: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(event) {
        axios.post(
            "https://apt.devcamp.space/sessions",

            {
                client: {
                    email: this.state.email,
                    password: this.state.password
                }
            },

            { withCredentials: true }

            ).then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth()
                } else {
                    this.setState({
                        errorText: "Wrong email or password"
                    })
                    this.props.handleUnsuccessfulAuth()
                }
            }).catch(error => {
                this.setState({
                    errorText: ("some error occured " + error)
                })
                this.props.handleUnsuccessfulAuth()
            })
        // prevent refresh of page caused by submit of input
        event.preventDefault()
        
    }


    render() {
        return(
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>
                <div className="error-msg">{this.state.errorText}</div>

                <form onSubmit={this.handleSubmit}>
                    <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }

}