import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n=3, winningSum=15, winCondition}){ //n- size of ticket arr

    let[num, setNum]=useState(genTicket(n));
    let isWinner= winCondition(num);

    let buyTicket=()=>{ //func in js are 1st class objects- passed as arg to another func, returned and assigned to a variable
        setNum(genTicket(n));
        }

    let winText={color: 'green'};

    return(
        <div>
            <div className="status">
                {
                    isWinner? <h1 style={winText}>Hurrayy! You won the Lottery!</h1> : <h4 style={{color: 'red'}}>Try again!</h4>
                }
            </div>
            <h2>Triple Yahtzee!</h2> <br /> <br />
            <div >
            <Ticket ticket={num} />
            </div> <br /><br />

            <button onClick={buyTicket}>Get a Lottery Ticket!</button>

        </div>
    )
}