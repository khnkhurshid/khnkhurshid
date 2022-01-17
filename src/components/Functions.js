import React from 'react'

  function Functions() {
    function clilckEvent(){
       console.log('button clicked');
    }
    return (
        <div>
            <button onClick={clilckEvent}>Click</button>
        </div>
    )
}

export default Functions