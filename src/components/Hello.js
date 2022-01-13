import React from "react";


const Hello = () => {
   return React.createElement('div',{id:'Hello',class:'dummyclass'},
   React.createElement('h1',null,'Hello Again'))
}

export default Hello