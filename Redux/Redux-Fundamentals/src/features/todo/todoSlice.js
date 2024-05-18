//reducers + actions
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState= {
    todos: [{id: '696', task: 'build a fullStackApp', isDone: false}],
};

export const todoSlice = createSlice( {
    name: "todos",
    initialState,
    reducers: { //passing an obj of functions- state& action
       addTodo: (state, action) =>{
        const newTask= { //fetching the entered task
            id: nanoid(),
            task: action.payload,
            isDone: false,
        }; //now accessing the todos arr from state and pushing this newTask
        state.todos.push(newTask); //***direct mutation***-- state var mei direct change--enabled by redux toolkit--not in react
        //ham react mei ek complete new arr ko form krte hai thru destructuring and copying it, then passing new task 
        // to it--lik---- [...todos, newTodo]-- a complete new arr
       },

       deleteTodo: (state, action)=>{
        // id: action.payload, yaha id rhegi iss case mei
       state.todos = state.todos.filter((task)=> { task.id !== action.payload  })
       },

       markAsDone: (state, action) =>{
        // id: action.payload, yaha id hogi 
        state.todos = state.todos.map((task)=> {
            if(task.id === action.payload ) {
            task.isDone= true
        }

       });
    } 
}
});

//action creators are fnxs that create action objects
// Action creators are generated for each case reducer function to gen type and payload for each
export const { addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;  //spelling ****
