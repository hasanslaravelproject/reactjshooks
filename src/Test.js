import React from 'react'

function Test() {
    
    function Abc(){
        console.log('hello my name is')
    }
    const Moon =()=>{
        console.log('ha ha ')
    }
      return (
        <div>
            <button onClick={Abc} className="pp">click here</button>
            <button onClick={Moon} className="pp">click here</button>
        </div>
    )
}
export default Test
