import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleUserComments = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleUserTopics = event => {
        this.setState({
            topic: event.target.value
        })
    }

    submitFormData = event => {
        alert(`${this.state.username}  ${this.state.comments}   ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username,topic,comments} = this.state
        return (
            <form onSubmit={this.submitFormData}>
                <div>
                    <label> Username</label>
                    <input type='text' value={username} onChange={this.handleUserNameChange}>

                    </input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleUserComments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleUserTopics}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Pascal'>Pascal</option>
                    </select>
                </div>
                <div>
                    <button type='submit'>Submit</button>

                </div>

            </form>
        )
    }
}

export default Form
