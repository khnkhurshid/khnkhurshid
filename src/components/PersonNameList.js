import React from 'react'
import Person from './Person'


  function PersonNameList() {

    const persons =[
        {
            id:1,
            name:'khurshid',
            skill:'Java'
        },
        {
            id:2,
            name:'Farha',
            skill:'Bio-Tech'
        },
        {
            id:3,
            name:'Arsh',
            skill:'Maths'
        },
        {
            id:4,
            name:'Arisha',
            skill:'Reading'
        }
    ]
    const personList = persons.map(person =><Person key={person.id} person= {person}/>)
    return (
        <div>  {personList}</div>
    )
}

export default PersonNameList
