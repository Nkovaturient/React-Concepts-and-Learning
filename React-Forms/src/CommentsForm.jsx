import { useState } from "react";
import './AllComments.css';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Username cannot be empty!';
    } else if (values.userName.length > 15) {
      errors.userName = 'Must be 15 characters or less';
    }
  
    if (!values.review) {
      errors.review = 'Review cannot be empty!';
    } else if (values.review.length > 150) {
      errors.review = 'Must be 150 characters or less';
    }
  
    if (!values.rating) {
      errors.rating = 'Required';
    } else if (values.rating > 5) {
      errors.rating = 'Enter Range!';
    }
  
    return errors;
  };


export default function CommentsForm({addNewComment}){

    // let [reviewData, setReviewData]= useState({
    //     userName: "",
    //     review: "",
    //     rating: 5,
    // });

    const formik = useFormik({
        initialValues: {
            userName: "",
            review: "",
            rating: 5,
        },
        validate,
        onSubmit: (values, {resetForm}) => {
        //   alert(JSON.stringify(values, null, 2));
          addNewComment(values);

          resetForm();
          
        },
        
      });
   

    let[isValid, setIsValid]=useState(true);

    // let handleReviewChange = (event)=>{
    //     setReviewData((currData) =>{
    //         return{
    //             ...currData,
    //             [event.target.name]: event.target.value,
    //         }

    //     }) }

        //handling submit default behavior
    // let handleSubmit=(event)=>{
       
    //     if(reviewData.length){ //to root out empty form rendering
    //         addNewComment(reviewData); //passing the comments data to func
    //     console.log(reviewData);
    //     event.preventDefault();

    //     } else {
    //         setIsValid(false);
    //         return;
    //     }

    //     setReviewData({  
    //         userName: "",
    //         review: "",
    //         rating: 5,
    //     });

    //     // if(!reviewData.userName){ --another way custom validation from scratch or use **FORMIK-REACT**
    //     //     console.log("username is null");
    //     //     setIsValid(false);
    //     //     event.preventDefault();
    //     //     return;
    //     // }
    //     // console.log(reviewData);
    //     // addNewComment(reviewData); \\ setformdata

    // }
    

    return(
        <div>
            <h3>Your Feedback Matters!</h3>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username"> Username: </label>
                <input id="username" name="userName" type="text" placeholder="enter your username"
                  value={formik.values.userName} 
                 onChange={formik.handleChange}
                  /> 
                  {formik.errors.userName ? <p style={{color: 'red'}}>{formik.errors.userName}</p> : null}
                  
                  <br /> 
                {/*value={reviewData.userName}  onChange={handleReviewChange} onClick={handleSubmit}
                using FORMIK validation {
                    (!isValid && <p style={{color: 'red'}}>Field cannot be empty!</p>)
                } */}

                <label htmlFor="comments"> Comment your opinion: </label> <br />
               <textarea name="review" id="comments" cols="30" rows="5" placeholder="good experience..."
                value={formik.values.review} 
                onChange={formik.handleChange}></textarea>
                {formik.errors.review ? <p style={{color: 'red'}}>{formik.errors.review}</p> : null}
                <br />
                

                <label htmlFor="rate"> Rating: </label> <br />
                <input name="rating" id="rate" type="range" min={1} max={5}
                 value={formik.values.rating}
                onChange={formik.handleChange} />
                {formik.errors.rating ? <p style={{color: 'red'}}>{formik.errors.rating}</p> : null}
                 <br /><br />

                <button type="submit" className="comment-btn" >Add Comment</button>
            </form>
        </div>
    )
}