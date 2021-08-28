import React from 'react'
import { useState, useEffect } from 'react';

function Timer (){

  const [counter, setCounter] = React.useState(0);
React.useEffect(() => {
 
  counter < 60 ?  setTimeout(() => setCounter(counter + 1), 1000)  : setCounter(0)
}, [counter]);


    return (
        <div    id="counter">
{counter}
        </div>
    )
}

export default Timer;
