import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

 
function Cart() {
 
  const [cart, setCart] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const gst = (cart ? (cart.totalAmount - discount) * 0.05 : 0);
const finalAmount = (cart ? (cart.totalAmount - discount + gst) : 0);
  useEffect(() => {
     const userId = localStorage.getItem("userId");
    axios
      .get(`http://localhost:8080/cart/${userId}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
 
  }, []);
  const placeOrder=async() => {
    try {
        const userId=localStorage.getItem("userId");

        await axios.post(`http://localhost:8080/orders/${userId}`);
        alert("Order Placed Successfully");
        window.location.href="/orders";
    }
    catch(error){
        console.log(error);
        alert("Failed To Place Order");
    }
  };
 const applyCoupon = () => {
 
    if(couponCode === "WELCOME10"){
        setDiscount(cart.totalAmount * 0.10);
        alert("10% Discount Applied");
    }
    else if(couponCode === "SAVE20"){
        setDiscount(cart.totalAmount * 0.20);
        alert("20% Discount Applied");
    }
    else if(couponCode === "PIZZA50"){
        setDiscount(50);
        alert("₹50 Discount Applied");
    }
    else{
        alert("Invalid Coupon");
    }
};
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">My Cart</h2>
      {cart && (
        <div className="card p-4 shadow">
          <h4>Cart ID : {cart.cartId}</h4>
          {/* <h4 className="text-success fw-bold">Total Amount : ₹{cart.totalAmount}</h4>
          <h5>User : {cart.user?.name}</h5> */}
          <h4 className="text-success fw-bold">
    Total Amount : ₹{cart.totalAmount}</h4>
 
<div className="mt-3">
    <input
        type="text"
        className="form-control"
        placeholder="Enter Coupon Code"
        value={couponCode}
        onChange={(e)=>setCouponCode(e.target.value)}
    />
 
    <button
        className="btn btn-success mt-2"
        onClick={applyCoupon}
    >
        Apply Coupon
    </button>
     <h6 className="text-black"></h6>
   <h6>Discount:₹{discount.toFixed(2)}</h6>
    <h6 className="text-black">
        GST (5%) : ₹{discount.toFixed(2)}
    </h6>
 
    <h4 className="text-primary">
        Final Amount : ₹{(finalAmount).toFixed(2)}
    </h4>
 
</div>
 
<h5>User : {cart.user?.name}</h5>
          <hr/>
          <h4>Cart Items</h4>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
                <tr><th>Pizza</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th></tr>
            </thead>
            <tbody>{cart.cartItems && cart.cartItems.map((item) => (
                <tr key={item.carItemId}>
                    <td>{item.pizza.pizzaName}</td>
                    <td>{item.pizza.price}</td>
                    <td>{item.quantity}</td>
                    <td>₹ {item.subTotal}</td>
                </tr>))}</tbody>
          </table>
           <button className="btnbtn-success btn-lg mt-3" onClick={placeOrder}>Place Order</button>
        </div>
 
      )}
    </div>
  );
}
 
export default Cart;