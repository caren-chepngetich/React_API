import './index.css'
import { useState } from 'react';
import { login } from './utilis';
const Login= ()=>{
   
 const [username,setUserName] =useState("");
 const [password,setPassword] =useState("");

 console.log({username});

 const handleLogin =async(event)=>{
    event.preventDefault();
    const result = await login({username,password});
    console.log({result});
 }
    return(
        <div>
<form>
    <input placeholder="Enter username" type="text"onChange={(event)=>setUserName(event.target.value)}/>
    <br/>
    <input placeholder="Enter password" type="text"onChange={(event)=>setUserName(event.target.value)}/>
    <br/>
    <button type="submit">Login</button>
</form>
        </div>
    )
}
export default Login;