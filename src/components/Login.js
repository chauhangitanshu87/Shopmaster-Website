import React,{useState,useEffect}from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const[email,setEmail]= useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate("/")
        }
    }, [])
    
    const handleLogin = async () => {
        // console.warn("email,password", email, password)
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate("/")
        } else {
            alert("Please enter connect details")
        }
    }




 return(
    <div className="form-container"> 
        <div className="row justify-content-center">
    <div className="col-md-6 col-lg-4">
      <form>
        <h2 className="text-center my-3">Login</h2>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" 
          value={email} onChange={(e) => setEmail(e.target.value)}
          id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control"
           value={password} onChange={(e)=>setPassword(e.target.value)}
          
          id="exampleInputPassword1" placeholder="Password" />

        </div>
        <button type="submit" 
        
        onClick={handleLogin}
        
        className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  </div>
    </div>

 )   
}

export default Login;