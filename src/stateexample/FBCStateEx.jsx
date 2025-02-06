import React from 'react'
const FBCStateEx = () => {
    const[value ,serValue] =React.useState(0);
    console.log(value);
    const changeValue=()=>{
        serValue(1000);
    }
  return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeValue}>changeValue</button>
    </div>
  )
}
export default FBCStateEx