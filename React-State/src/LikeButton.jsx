import { useState } from "react";
import viteImg from "./assets/react.svg";


export default function LikeButton(){

    let[isliked, setIsLiked]= useState(false); // isLiked is false hence- !isLiked
    let[count, setCount]= useState(0);

    let toggleClick= ()=>{
        setIsLiked(!isliked);
        setCount(count+1);
    }

    let likeStyle={color: "red"};

    return(
        <>
        <div>
            <img src={viteImg} alt="vite" height={150} width={200}/> <br />
            
            <button onClick={toggleClick} >
            {
                isliked? <i className="fa-solid fa-face-grin-hearts" style={likeStyle}></i> : <i className="fa-regular fa-face-grin-hearts"></i>
            }
            </button>
            <b >Likes: {count}</b>
            
        </div>
        </>
    )
}

// {isliked.toString()}
// MIND icons 'CLASSNAME'