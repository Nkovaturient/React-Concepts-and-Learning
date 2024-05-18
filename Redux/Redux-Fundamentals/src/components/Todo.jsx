
import { useDispatch, useSelector } from "react-redux"; //to access data from redux store
import AddForm from "./AddForm.jsx";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice.js";


export default function Todo(){
    
   const todos= useSelector((state) => state.todos );
   console.log('before- ', todos);
   const dispatch= useDispatch();

   const deleteHandler = (id, todos) => {
    console.log('delete', id);
    // dispatch(deleteTodo(id));
    // console.log('after dlt=  ', todos);
   }

const doneHandler = (id)=>{
    console.log("done", id);
    dispatch(markAsDone(id));
    console.log('after done=  ', todos);
}

   const doneStyle = { color: 'red', textDecoration: 'line-through'};

    return (
        <>
       <AddForm />
        <h3>Todo List App</h3>
        <ul >
            {
                todos.map((todo) => (
                    <li key={todo.id}> 
                     {todo.task}
                <button onClick={ () => deleteHandler(todo.id)}>Remove</button>
                   <button onClick={ ()=> doneHandler(todo.id)} >Mark as Done</button>
                   </li>
                )
            )}
        </ul>
        </>
    )
}