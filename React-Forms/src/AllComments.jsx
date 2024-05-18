import { useState } from "react";
import './AllComments.css';
import CommentsForm from "./CommentsForm";


export default function AllComments(){
    let[comment, setComment]=useState([{ //as state var not props cuz comments mei changes honge
        userName: "Mike Tyson",
        review: "its fun learning react.js",
        rating: 4
    }]);

    let addNewComment=(newObjectComment)=>{  //the comments gets stored here as obj in setComment-> comment and rendered
        setComment((currComment)=>[ ...currComment,  newObjectComment ]

        );
        console.log('added new comments');
    }
    

    return(
        <>
      <div>
          <h2>All Comments</h2> {/**parent component- */}
          {
                comment.map((reviews, idx)=> 

                    <div className="comment" key={idx}>
                    <i className="rate" >"{reviews.review}"</i> <br />
                            <code>Rated: {reviews.rating}</code> <br />
                            <b>By: @{reviews.userName}</b> 
                            <hr />
                </div>
                  )
        }
       
      </div>
      <hr /><hr />
      <CommentsForm addNewComment={addNewComment} />   {/*passing the func as props to child component */}
      </>
    )
}