import React, { Component } from 'react'

 class ClassClick extends Component {

    clickMe() {
        console.log('Button clicked from Class')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickMe}> Click Me</button>
            </div>
        )
    }
}

export default ClassClick
