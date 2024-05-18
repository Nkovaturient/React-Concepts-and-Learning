import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function InputTask(){

    let[input, setInput]=useState('');

    let handleInput=(event)=>{
        setInput(event.target.value);
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(input);
        setInput('');
    }

    return(
        <div>
            <TextField id="task"
             name='task'
             value={input}
             onChange={handleInput}
              label="Outlined" variant="outlined" /> <br />
            <Button onClick={handleSubmit}  type='submit' variant="contained" color="success">Add Task</Button>
        </div>
    )
}