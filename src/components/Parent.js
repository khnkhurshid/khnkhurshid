import React, { Component } from 'react'
import Child from './Child'

 class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'parent'
        }
        this.sayHello = this.sayHello.bind(this)
    }

    sayHello(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <Child greetHandler={this.sayHello}/>
            </div>
        )
    }
}

export default Parent;
