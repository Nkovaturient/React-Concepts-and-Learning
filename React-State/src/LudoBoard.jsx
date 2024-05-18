import { useState } from "react"

export default function LudoBoard() {

    let [moves, setMoves]= useState({blue: 0, red:0, yellow: 0, green: 0});
    // let[count, setCount]= useState(0);
    let[arr, setArr]= useState([]);

    let updateBlue= ()=>{

        setMoves((prevMoves)=>{
            return {...prevMoves, blue: prevMoves.blue + 1}
        });
        // console.log(`object var= ${moves.blue}`); //object var gets updated at func call itself
        // console.log(`counter var= ${count}`); //counter var gets updated at re-render stage not func call stage
        // setCount(count+1);

        //array&STATE
        setArr((prevArr)=>{
            console.log(prevArr);
            return [...prevArr, " blueMoves"];
            
        });
        
    }

    let updateRed= ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red + 1}
        }); //using spread operator to create and pass 
        //a new obj which React state detects and re-renders the components

        setArr((prevArr)=>{
            console.log(prevArr);
            return [...prevArr, " redMoves"];
            
        });
    }

    let updateYellow= ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow: prevMoves.yellow + 1}
        }); 

        setArr((prevArr)=>{
            console.log(prevArr);
            return [...prevArr, " yellowMoves"];
            
        });
    }

    let updateGreen= ()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves, green: prevMoves.green + 1}
        }); 
    }

    return(
        <div>
            <h2>Ludo Board Display: </h2>
            <code>{arr}</code>
          <div className="board">
          <p>Blue Moves: {moves.blue}</p>
            <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
            <p>Red Moves: {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor: "red"}} >+1</button>
            <p>Yellow Moves: {moves.yellow}</p>
            <button onClick={updateYellow} style={{backgroundColor: "yellow"}}>+1</button>
            <p>Green Moves: {moves.green} </p>
            <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
          </div>
        </div>
    )
}