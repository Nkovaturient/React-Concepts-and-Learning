import { useState } from "react";
import ColorInput from "./ColorInput";

export default function ColorifyTab(){
    let[color, setColor]=useState('');

    let getColor=(inpColor)=>{ //using callback func to pass data from child 2 parent
        setColor(inpColor);
    }
    return(
        <div>
            <h2>Enter any random color!</h2> <br />
           <div className="box" style={{width: "250px", height: '90px', border: '2px solid black', backgroundColor: `${color}` } }></div> 
           <ColorInput getColor={getColor} /> {/*child to parent components*/}
        </div>
    )
}