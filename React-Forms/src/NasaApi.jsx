import { useEffect, useState } from "react";

export default function NasaApi(){

    let[active, setActive]=useState({});
    const url= `https://www.boredapi.com/api/activity`;

    let getApi=async()=>{
        // try { /**/IMPORTANT */
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     setActive({
        //         type: data.type,
        //         activity: data.activity
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    
        let res= await fetch(url);
        let jsonRes= res.json();
        // console.log(jsonRes);

        jsonRes.then((data)=>{
            console.log(data);
            setActive({
                type: data.type,
                 activity: data.activity
            
        });
            
        }).catch((err)=>{
            console.log(err);
        });
        
    
        
    }

    // fetching data for the first time
    useEffect(()=>{async function getFirstActivity(){ //we cannot directly pass async func hence arrow func
        let res= await fetch(url);
        let jsonRes= await res.json();
        console.log(jsonRes);
        setActive({ type: jsonRes.type, activity: jsonRes.activity });
    }
    getFirstActivity(); //call it here
    }, []); //1st rendering side-effects

    


    return (
        <div>
            <h3>Too much of Jokes? </h3>
            <button onClick={getApi}>Get an Activity!</button>
            <div className="info">
               
                <ul>
                    <li><h3>{active.type}</h3></li>
                    <li><p>{active.activity}</p></li>
                </ul>
            </div>
        </div>
    )
    }