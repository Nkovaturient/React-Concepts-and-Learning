import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    const [task, setTask]= useState("");
    const dispatch = useDispatch();

    const submitHandler = (e)=> {
        e.preventDefault();
        // console.log(task);
     dispatch(addTodo(task)); //triggering that state change--passing new 'task' action to one of our reducer-adddTodo
        //dispatching actions
        setTask("");
    }

    return (
        <form>
        <input type="text" onChange={(e) => setTask(e.target.value) } />
        <button onClick={submitHandler}>Add Task</button>
        </form>
    )
}