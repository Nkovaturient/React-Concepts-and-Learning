import { useState } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function MaterialDemo(){

let handleClick=()=>{
    console.log(" Material button clicked");
  }

  let[form, setForm]=useState({
    username: "",
    msg: "",
  });



  let handleInputChange=(event)=>{
    setForm((currData)=>{
      return{
        ...currData,
      [event.target.name]: event.target.value,
      }
      
    })

  }

  let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(form);

    setForm({
      username: "",
      msg: "",
    })

  }

  return (
    <>
    <h2>Material UI Session </h2>
    <AccountCircleIcon/> &nbsp;&nbsp;
    <Badge badgeContent={3} color="success">
        <MailIcon color="action" />
      </Badge>
    <ol>
      <li>Import that component[expand code]</li>
      <li> Renderin App.jsx['Component ']</li>
      <li>Must import the required props</li>
    </ol>
    <hr />
    <div className='form'>
      <h3>Get in touch!</h3>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Username
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          name='username'
          value={form.username}
          onChange={handleInputChange}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl> <br />
      <TextField
        id="input-with-icon-textfield"
        name='msg'
          value={form.msg}
          onChange={handleInputChange}
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      </Box>
    </div> <br />
    <Button color="success" variant='contained' onClick={handleSubmit} endIcon={<SendIcon />} >Send</Button> <br /><br />
    <Button color="error" variant='contained' onClick={handleClick} size='small' startIcon={<DeleteIcon />}>Delete</Button>
    </>
   ) }