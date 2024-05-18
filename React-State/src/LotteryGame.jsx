import { useState } from "react";
import './LotteryGame.css';
import {sum, genTicket } from './helper.js';


function genRandom(){
    return Math.floor(Math.random()* 10);
    
 }

export default function LotteryGame(){
  
    // let[num, setNum]=useState([0, 0, 0, ]);
    let[num, setNum]=useState(genTicket(3));
    
    let buyTicket=()=>{
    setNum(genTicket(3));
    }

    let isWinner= sum(num) === 15;

    // let lotteryGame =()=>{
    //     setNum((num)=>{
    //         return [ 
    //             ...num,
    //              num[0]=genRandom(),
    //              num[1]=genRandom(),
    //              num[2]=genRandom(),

    //             ];
    //     })
    // } 


    let winText={color: 'green'};
    return(
        <div>
            <div className="status">
                {
                    isWinner? <h2 style={winText}>Hurrayy! You won the Lottery!</h2> : <h4 style={{color: 'red'}}>Try again!</h4>
                }
            </div>
            <div>
            <h2>Lottery</h2>
            
            <p>Lottery Ticket</p>
            <div className="ticket">
                <span>{num[0]}</span>
                <span>{num[1]}</span>
                
           
            </div> <br />
            <button onClick={buyTicket}>Get New Ticket</button>
            </div>
        </div>
    )
}