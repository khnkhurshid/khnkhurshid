import React, { Component } from 'react'

 class HelloCondition extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn : true
         }
     }
     
    render() {
        
          return  this.state.isLoggedIn && <div>Hello Khurshid</div>
             
            }
       
    }


export default HelloCondition
