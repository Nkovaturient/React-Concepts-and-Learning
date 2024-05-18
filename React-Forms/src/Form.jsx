import { useState } from "react";



export default function Form(){
    let[formData, setFormData]= useState({  /**COMMON STATE VARIABLE */
        fullName: "",
        userName: "",
        eMail: "",
    });

    let handleInputChange=(event)=>{  //** COMMMON HANDLER FOR ENTIRE FORM */
        // let fieldName= event.target.name;
        // let newValue= event.target.value;
        // console.log(`field: ${fieldName} has value: ${valueName}`); //fullName || userName  to match with state var- 'fullName: "",
        
        //assigning these values to obj state var
         setFormData((currData)=> {
            // currData[fieldName] = newValue; //** computed property name- accessing obj property when not knwing the exact name of that property(full/userName) */
         return {
            ...currData, //**spread() this to re-pass the entire object for react to detect
            [event.target.name]: event.target.value,
        //  [fieldName]: newValue,
        }

        });
    }

    //handling submit default behavior
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);

        setFormData({  //to render entire form empty on submission- we hv to re-set the objects to empty
            fullName: "",
            userName: "",
            eMail: "",
        });

    }




    // let [fullName, setFullName]= useState(""); --instead of creating multiple state variables
    // let [userName, setUserName]= useState("");

    // let inpFullName=(event)=>{ //no arrow func --**not depended on prev value 
    //     setFullName(event.target.value);
    // }

    // let inpUserName=(event)=>{ 
    //     setUserName(event.target.value);
    // }



    return(
        <div>
        <h2>Forms in React</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name: </label>
            <input 
            id="fullname"  
             name="fullName"  //name shld be same as state var for event.target.name
              type="text"
               placeholder="enter full name"
                value={formData.fullName}
                 onChange={handleInputChange} /> <br />
            <label htmlFor="email">Email: </label>
            <input id="email"
             name="eMail" //name shld be same as state var
              type="email"
               placeholder="enter  email"
                value={formData.eMail} onChange={handleInputChange} /> <br />
                 <label htmlFor="username">User Name: </label>
            <input id="username"
             name="userName" //name shld be same as state var
              type="text"
               placeholder="enter  username"
                value={formData.userName} onChange={handleInputChange} /> <br />
            <button>Submit</button>
        </form>
        </div>
    )
}