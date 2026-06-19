import axios from "axios";

export const getDashboard = () => 
    axios.get("http://localhost:8080/dashboard");