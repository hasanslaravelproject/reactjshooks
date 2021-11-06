import React,{useState} from 'react'
const Hello = ({name}) => {
const [count, setCount] = useState(0)
return (
        <div>
            my name is {name}{count}
            <button onClick={()=>setCount(count+1)}>increase</button>
        </div>
    )
}
export default Hello

