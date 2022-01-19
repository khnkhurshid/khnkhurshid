import React from 'react'


  function Child(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Child')}>Hello</button>
        </div>
    )
}
export default Child