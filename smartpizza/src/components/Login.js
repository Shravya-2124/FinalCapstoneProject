import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
function Login() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const handleLogin = async (e) => {
        e.preventDefault();

           // Validation
    if (!email.trim()) {
        alert("Email is required");
        return;
    }
 
    if (!password.trim()) {
        alert("Password is required");
        return;
    }
    e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/login",
                { email, password}
            );
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("userId",response.data.userId);
             localStorage.setItem("role",response.data.Role);

             console.log("FULL RESPONSE =", response.data);
console.log("ROLE =", response.data.Role);
alert("ROLE = " + response.data.Role);
            
            alert("Login Successful");
            if(response.data.Role === "ADMIN"){
                window.location.href="/admin";
            }else{
                window.location.href="/pizzas";
            }
           
            // console.log("JWT Token:", response.data);
            console.log(response.data);
 
        } catch (error) {
 
            console.log(error);
            console.log(error.response);
            console.log(error.response?.data);
 
            alert(
                error.response?.data || "Invalid Credentials"
            );
        }
    };
 
//     return (
//         <div className="container mt-5">
//             <div className="row justify-content-center">
//                 <div className="col-md-4">
//                     <div className="card p-4">
//                         <h3 className="text-center"> Login </h3>
                      
//                         <form onSubmit={handleLogin}>
//                             <div className="mb-3">
//                                 <label>Email</label>
 
//              <input type="email" className="form-control" value={email} onChange={(e) =>setEmail(e.target.value)}required />
//                             </div>
//                             <div className="mb-3">
//                                 <label>Password</label>
//              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}required/>
//                             </div>
//                             <button type="submit" className="btn btn-primary w-100">Login</button>
//                               <p className="text-center mt-3">New User?
//                         <Link to="/register">Register Here</Link></p> 
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
 
return (
  <div

    className="container-fluid d-flex justify-content-center align-items-center"
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #141E30 0%, #243B55 100%)"
    }}
  >
  
    <div className="row justify-content-center w-100">
      <div className="col-md-5">
 
        <div
          className="card p-4"
          style={{
            borderRadius: "20px",
            border: "none",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
 
          <h2
            className="text-center"
            style={{
              color: "#1e3c72",
              fontWeight: "bold"
            }}
          >
            SmartPizza AI
          </h2>
 
          <p
            className="text-center"
            style={{
              color: "gray",
              marginBottom: "25px"
            }}
          >
            AI Powered Pizza Ordering System
          </p>
 
          <form onSubmit={handleLogin}>
 
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  borderRadius: "10px",
                  height: "45px"
                }}
              />
            </div>
 
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  borderRadius: "10px",
                  height: "45px"
                }}
              />
            </div>
 
            <button
              type="submit"
              className="btn w-100"
              style={{
                backgroundColor: "#ff6b35",
                color: "white",
                fontWeight: "bold",
                borderRadius: "10px",
                height: "45px",
                border: "none"
              }}
            >
              Login
            </button>
 
            <p className="text-center mt-3">
              New User?{" "}
              <Link to="/register">
                Register Here
              </Link>
            </p>
 
          </form>
 
        </div>
 
      </div>
    </div>
  </div>
);
}
export default Login;