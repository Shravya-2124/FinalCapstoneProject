import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
function Register() {
 
    const navigate = useNavigate();
 
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "CUSTOMER"
    });
 
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
 
    const handleRegister = async (e) => {
        if (!user.name.trim()) {
    alert("Name is required");
    return;
}
 
if (!user.email.trim()) {
    alert("Email is required");
    return;
}
 
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
if (!emailPattern.test(user.email)) {
    alert("Enter valid email");
    return;
}
 
if (!user.password.trim()) {
    alert("Password is required");
    return;
}
 
if (user.password.length < 5) {
    alert("Password must be at least 5 characters");
    return;
}
 
if (!user.phone.trim()) {
    alert("Phone number is required");
    return;
}
 
if (!user.address.trim()) {
    alert("Address is required");
    return;
}
        e.preventDefault();
 
        try {
 
            await axios.post(
                "http://localhost:8080/users",
                user
            );
 
            alert("Registration Successful");
 
            navigate("/");
 
        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };
 
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
          className="card border-0 shadow-lg"
          style={{
            borderRadius: "20px",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(10px)"
          }}
        >
 
          <div className="card-body p-5">
 
            <h2
              className="text-center mb-2"
              style={{
                color: "#243B55",
                fontWeight: "bold"
              }}
            >
             SmartPizza AI
            </h2>
 
            <p
              className="text-center mb-4"
              style={{ color: "#6c757d" }}
            >
              Create Your Account
            </p>
 
            <form onSubmit={handleRegister}>
 
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="👤 Full Name"
                  value={user.name}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px"
                  }}
                />
              </div>
 
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="📧 Email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px"
                  }}
                />
              </div>
 
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="🔒 Password"
                  value={user.password}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px"
                  }}
                />
              </div>
 
              <div className="mb-3">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="📱 Phone Number"
                  value={user.phone}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px"
                  }}
                />
              </div>
 
              <div className="mb-4">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="🏠 Address"
                  value={user.address}
                  onChange={handleChange}
                  required
                  style={{
                    borderRadius: "10px",
                    padding: "12px"
                  }}
                />
              </div>
 
              <button
                type="submit"
                className="btn w-100"
                style={{
                  background:
                    "linear-gradient(90deg,#ff6b35,#ff8e53)",
                  color: "white",
                  fontWeight: "bold",
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  fontSize: "18px"
                }}
              >
                Register
              </button>
 
            </form>
 
          </div>
 
        </div>
 
      </div>
    </div>
  </div>
);
}
 
export default Register;