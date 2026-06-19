import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import PizzaList from "./components/PizzaList";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import AdminPizza from "./components/AdminPizza";
import AdminOrders from "./components/AdminOrders";
import AdminDashboard from "./components/AdminDashboard";
import Footer from "./components/Footer";
import Payment from "./components/Payment";
import Tracking from "./components/Tracking";
 
function App() {
  const role = localStorage.getItem("role");
 
return (
 
  <BrowserRouter>
 
   <Routes>
 
    <Route path="/"
      element={<Login />}
    />
 
    <Route path="/register"
      element={<Register />}
    />
 
     <Route path="/pizzas"
      element={<PizzaList />}
    />

    <Route path="/cart"
      element={<Cart/>}
    />

    <Route path="/orders"
      element={<Orders/>}
    />
     <Route path="/admin"
      element={<AdminPizza/>}
    />

    <Route path="/admin-orders"
      element={<AdminOrders/>}
    />


       <Route path="/dashboard"
      element={role==="ADMIN"?<AdminDashboard/>:<PizzaList/>}
    />

    
       <Route path="/payment/:orderId"
      element={<Payment/>}/>

      <Route path="/tracking/:orderId"
       element={<Tracking />} />

    
   </Routes>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   

   <Footer/>
  </BrowserRouter>
 
);
}
 
export default App;