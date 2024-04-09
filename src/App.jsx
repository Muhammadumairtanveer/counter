import React, { useState } from 'react'

let App = () => {

  const [value,setValue] = useState(0)

  const addvalue = ()=>{
    setValue(value+1)
  }
  const removevalue=()=>{
    setValue(value-1)
  }

  return (
    <>
    <div className="card">
    <div><h1>Count:{value}</h1></div>
    <div><button onClick={addvalue}>Add value</button></div> 
    <div><button onClick={removevalue}>Decrease value</button></div>
    </div>
   
    </>
  )
}

export default App