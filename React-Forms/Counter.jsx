import { useEffect, useState } from "react"

export default function Counter(){

    let [countx, setCountx]= useState(0);
    let [county, setCounty]= useState(0);

    let incCountx=()=>{
        setCountx((currCount)=> currCount+1);
    }

    let incCounty=()=>{
        setCounty((currCount)=> currCount+1);
    }
    // useEffect(setup(func), dependencies(optional))

    useEffect(function sideEffect() { //state var mei change- re-render- func executes - side effects
        console.log("this is the side effect");
    }, []) //useEFFECT dependency on specific countx state var only and triggers only at countx re-rendering hence
    // []- after 1st time render, sidde effect wont execute/trigger on re-rendering components/state var
    // [countx, county, ..]-dependent on specific state var for trigger
    // [countx]

    return(
        <div>
            <h1>Counter</h1>
            <code><b>Countx: {countx}</b></code> <br />
            <button onClick={incCountx}>+1</button> <br />
            <code><b>County: {county}</b></code> <br />
            <button onClick={incCounty}>+1</button> <br />
        </div>
    )
}