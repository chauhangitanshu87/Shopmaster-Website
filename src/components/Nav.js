import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Nav = () => {

  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand">Shopmaster</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Products <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">Update Product</Link>
            </li>
        
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li> */}
            
            <li className="nav-item"> {auth ? (
                <li>
                  <Link className="nav-link" onClick={logout} to="/signup">
                    Logout
                  </Link>
                </li>
              ) : (
                <div className="d-flex">
                  <li className="nav-item mr-3">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </div>
              )}
              
            </li>
           
          </ul>

       
        </div>
      </nav>
    </div>
  );
};

export default Nav;
