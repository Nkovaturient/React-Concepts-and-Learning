import { useState } from "react"

export default function ColorInput({ getColor}){

    let[inp, setInp]=useState('');

    let handleInputChange=(event)=>{
        setInp(event.target.value);
        // getColor(event.target.value);
    }

    let handleClick=(event)=>{
    //  console.log(inp);
    getColor(inp);
     setInp('');
    }

    return(
        <div>
            
            <input type="text"
             placeholder="blue.."
             value={inp}
             onChange={handleInputChange}  /> <br />
            <button onClick={handleClick}>Colorify</button>
        </div>
    )
}