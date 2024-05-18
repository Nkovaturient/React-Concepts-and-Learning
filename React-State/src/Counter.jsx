import { useState } from "react"

function random(){
    console.log(`random was exevuted`);
    return Math.random();
}
export default function Counter(){
    let [count, setCount]= useState(random); //initialization
console.log(`component was re-rendered!`);
    let incCount=()=>{
        //CASE 1: UPDATER FUNC:- new value state depends on old value state
        setCount((currCount)=>{
            return currCount + 1;
        });
        // setCount((currCount)=>{
        //    return currCount + 1;
        // });
           //CASE 2: UPDATER FUNC:- new value state depends on arbitrary/random value
        // setCount(25);

    }
    
    
return(
   <div>
     <h2>Count: {count}</h2> {/*but DOM mei koi changes nhi leke aayega, HENCE STATE is imperative */}
    <button onClick={incCount}>Increase Count</button> {/* change components mei ho rha hai logically*/}
   </div>
)
    
}

//HOW RE-RENDER WORKS- ?! RETAIN AND TRIGGER STAGE of useState()
// console.log(`component is re-rendered!`);
//     console.log(`count= ${count}`); //after re-render- trigger stage
//     // console.log(arr);
//     let incCount= ()=>{
//         setCount(count + 1);
//         console.log(`counting= ${count}`); // before re-render stage
//         //func call pr value update nhi hoti, re-render(trigger) stage pr update hoti hai
//     }

/*Access Props Using this.props
The last several challenges covered the basic ways to pass props to child components. 
But what if the child component that you're passing a prop to is an ES6 class component, 
rather than a stateless functional component? The ES6 class component uses a slightly different 
convention to access props.

Anytime you refer to a class component within itself, you use the 'this' keyword. 
To access props within a class component, you preface the code that you use to 
access it with this. For example, if an ES6 class component has a prop called data, 
you write {this.props.data} in JSX. */

// class App extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//               { /* Change code below this line */ }
//               <Welcome name={"Qwerty"} />
//               { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };
  
//   class Welcome extends React.Component {
//     constructor(props) {
//       super(props);
  
//     }
//     render() {
//       return (
//           <div>
//             { /* Change code below this line */ }
//             <p>Hello, <strong>{this.props.name}</strong>!</p>
//             { /* Change code above this line */ }
//           </div>
//       );
//     }
//   };