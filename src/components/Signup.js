import React,{useState}from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const navigate=useNavigate();

    const collectData=  async ()=>{
      let result = await fetch("http://localhost:5000/register",{
        method:'post',
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        }
    });
    result=await  result.json();
    console.warn(result);
    if(result){
      navigate('/')
    }
    
       
    }




  return (
    <div className="container mt-5"> {/* Add margin-top to push down from navbar */}
      <form className="w-50 mx-auto">
        <h2 className="text-center">Registration</h2>
        <div className="form-group">
          <label htmlFor="NAME">Name</label>
          <input
            type="text"
            className="form-control"
            id="NAME"
            placeholder="User Name"
            autoComplete="name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="EMAIL">Email address</label>
          <input
            type="text"
            className="form-control"
            id="EMAIL"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            autoComplete="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="PASSWORD">Password</label>
          <input
            type="password"
            className="form-control"
            id="PASSWORD"
            placeholder="Password"
            autoComplete="new-password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <button  onClick={collectData} type="submit" className="btn btn-primary btn-block my-4">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
