import { useContext } from "react";
import { MyContext } from "./MyContext";

export default function MyComponent(){
    const [text, setText]=useContext(MyContext); //defining state var in parent component to be accessed wherever required- useContext

    return(
        <div>
            <h1>{text}</h1>
            <button onClick={()=> setText('Hello, world!')}>Click me</button>
        </div>
    )
}