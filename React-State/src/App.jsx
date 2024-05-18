// import { useState } from 'react'

import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'

import LotteryGame from './LotteryGame'
import LudoBoard from './LudoBoard'
import MovingDot from './Magic'
import Lottery from './Lottery'
import Ticket from './Ticket'
import TicketNum from './TicketNum';
import { sum } from './helper.js';
import TodoList from './TodoList.jsx'

import ColorifyTab from './ColorifyTab.jsx'


function App() {
  let winningCondition= (arr)=>{ //passing this entire func as props to our components
    // return sum(arr) === 18;
    return arr.every((n)=> n=== arr[0]);
    // return arr[1] === 0;

  }

  return (
    <>
    <ColorifyTab/>
    {/* <TodoList /> */}
    {/* <LotteryGame  />  */}
    {/* <Lottery n={3} winCondition={winningCondition}/> */}
    {/* <Ticket ticket={[8, 4, 3]} /> */}
    {/* <TicketNum num={5} /> */}
   

     {/* <h1>States in React</h1> */}
     {/* <h3>Objects and States</h3> */}
     {/* <LudoBoard/> */}
     {/* <LikeButton/>
     <Counter/> */}
     {/* <MovingDot /> */}
    </>
  )
}

export default App
