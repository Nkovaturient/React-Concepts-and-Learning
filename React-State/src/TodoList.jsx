import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
import todoIcon from './assets/icon.png';



export default function TodoList(){

    // let[tasks, setTasks]=useState(["exam notes"]); //list of tasks arr
    let[tasks, setTasks]=useState([{todo: "exam notes", id: uuidv4(), isDone: false}]);  //tasks arr of objs with todo list and unique id/key
    let[newInput, setNewInput]=useState([""]); //to get input value

    //pass inp value to btn
    let inpNewTask=(event)=>{
        // console.log(event.target.value);
        setNewInput(event.target.value); //fetching inp value thru event obj

    }

    let handleAddTask=()=>{  //when btn clicked, add the tasks in list fetched from input value
        setTasks((prevTasks)=>{
            if(newInput.length) {
            return [...prevTasks, {todo: newInput, id: uuidv4(), isDone:false }]; }
            else {
                return [...prevTasks, {todo: "nil", id: uuidv4()}];
            }
        }); // inp value- todo mei jaayega and id gen hogi to be stored in tasks array

        setNewInput(""); //refresh inp
    }

    let deleteTask= (id)=>{

        setTasks((dltTask) => tasks.filter((dltTask)=> dltTask.id != id) 
        );

        // console.log(id);
        // let copy=tasks.filter((task)=> task.id !=id);
        // console.log(copy);
    }

    let textStyle={textDecoration: '2px red line-through', opacity: '0.7'};

    let markTaskAll= ()=>{
        setTasks((tasks)=>  //***make sure no curly braces here */
            tasks.map((task)=>{

                return {
                    ...task,
                    isDone: true
                    
                };
                
            } )
           
        );
    }

    
    let markTaskOne= (id)=>{
        setTasks((tasks)=> //***make sure no curly braces here */
        tasks.map((task)=>{
                if(task.id === id){
                    return {
                        ...task,
                        isDone: true
                    }

                } else {
                    return task;
                }
                
            })
        );
    }


   

    // let UpperCaseAll= ()=>{
    //     setTasks((tasks)=>  //***make sure no curly braces here */
    //         tasks.map((task)=>{
    //             return {
    //                 ...task,
    //                 todo: task.todo.toUpperCase()
    //             };
                
    //         })
    //     );
    // }

    // let UpperCaseOne= (id)=>{
    //     setTasks((tasks)=> //***make sure no curly braces here */
    //     tasks.map((task)=>{
    //             if(task.id === id){
    //                 return {
    //                     ...task,
    //                     todo: task.todo.toLowerCase()
    //                 };
    //             } else { //no change
    //                 return task;
    //             }
                
    //         })
    //     );
    // }
    
    return(
        <div className="container">
            <div className="search">
                <div className="heading">
                <img src={todoIcon} alt="icon" />
                <h3>TODO LIST</h3>
                </div>
                
                <input type="text" placeholder="enter your tasks.."
                 value={newInput} onChange={inpNewTask} /> &nbsp;
                <button className="search-btn" onClick={handleAddTask}>Add Task</button> &nbsp;&nbsp;
                <button className="search-btn" onClick={markTaskAll}>Mark All as Done</button>
            </div>

            <div className="items">
                <h4>Pending Tasks...</h4>
                <div className="task-items">
                <ul className="task-list">
                    {
                        tasks.map((task)=> {
                         return <li key={task.id} className="todo">
                            <span style={
                                task.isDone? textStyle : {}
                            }>{task.todo}
                            </span> &nbsp;&nbsp;&nbsp;
                            <button className="delete-btn" onClick={()=> deleteTask(task.id)}><i className="fa-solid fa-circle-xmark"></i></button>
                            <button className="done-btn" onClick={ ()=> markTaskOne(task.id)}>Mark as Done</button>
                            {/* <button onClick={ ()=> UpperCaseOne(task.id)}>LowerCaseOne</button> */}
                            </li> //or return (remove parenthesis)
                        })
                    }
                    
                </ul>
                </div>
                
                {/* <button onClick={UpperCaseAll}>UpperCase All</button> */}
                
            </div>
        </div>
    )
}