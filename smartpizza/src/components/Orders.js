import React, { useEffect, useState } from "react";
import axios from "axios";
 
function Orders() {
 
    const [orders, setOrders] = useState([]);
    const userId = localStorage.getItem("userId");

    console.log("USER ID=",userId);
   
    useEffect(() => {
          const token = localStorage.getItem("token");
    if(!token){
        window.location.href = "/";
        return;
    }
 
        axios
            .get(`http://localhost:8080/orders/user/${userId}`)
            .then((response) => {
                console.log("ORDERS=",response.data);
                setOrders(response.data);
 
            })
            .catch((error) => {
 
                console.log(error);
 
            });
 
    }, [userId]);

    console.log("STATE ORDERS=",orders);
 
    return (
 
        <div className="container mt-4">
 
            <h2>My Orders</h2>
 
            {orders.map((order) => (
 
                <div
                    key={order.orderId}
                    className="card p-3 mb-3"
                >
 
                    <h4>
                        Order ID : {order.orderId}
                    </h4>
 
                    <h5>
                        Amount : ₹{order.totalAmount}
                    </h5>
{/*  
                    <h5>Status :<span className=
                        "badge bg-info"> {order.orderStatus} </span>  
                    </h5> */}
                    {/* <h5> */}
{/* Status :
<span className="badge bg-info ms-2">
    {order.orderStatus}
</span>
</h5> */}
 
<div className="progress mt-3">
 
    <div
        className={`progress-bar
        ${order.orderStatus === "PLACED"
        ? "bg-secondary"
        : order.orderStatus === "PREPARING"
        ? "bg-warning"
        : order.orderStatus === "OUT_FOR_DELIVERY"
        ? "bg-info"
        : "bg-success"
        }`}
        style={{
            width:
            order.orderStatus === "PLACED"
            ? "25%"
            : order.orderStatus === "PREPARING"
            ? "50%"
            : order.orderStatus === "OUT_FOR_DELIVERY"
            ? "75%"
            : "100%"
        }}
    >
        {order.orderStatus}
    </div>
 
</div>
 
                Payment :
<span className={order.paymentStatus === "SUCCESS"
    ? "badge bg-success ms-2"
    : "badge bg-warning text-dark ms-2"}>
    {order.paymentStatus}
</span>
 
{order.paymentStatus === "PENDING" && (
    <div className="mt-3">
        <button
            className="btn btn-success"
            onClick={() => window.location.href = `/payment/${order.orderId}`}
        >
            Pay Now
        </button>
    </div>
)}
 
{order.paymentStatus === "SUCCESS" && (
    <div className="mt-3">
        <a
            href={`http://localhost:8080/orders/invoice/pdf/${order.orderId}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
        >
            Download Invoice
        </a>
    </div>
)}
{order.paymentStatus === "SUCCESS" && (
    <div className="mt-2">
        <button
            className="btn btn-info"
            onClick={() =>
                window.location.href = `/tracking/${order.orderId}`
            }
        >
            🚚 Track Order
        </button>
    </div>
)}
 
                </div>
 
            ))}
 
        </div>
    );
}
 
export default Orders;