import React, { useEffect, useState } from "react";
import axios from "axios";
 
function AdminOrders() {
 
    const [orders, setOrders] = useState([]);
 
    useEffect(() => {
        loadOrders();
    }, []);
 
    const loadOrders = async () => {
 
        try {
 
            const response = await axios.get(
                "http://localhost:8080/orders"
            );
 
            setOrders(response.data);
 
        } catch (error) {
 
            console.error(error);
            alert("Failed to load orders");
        }
    };
 
    const updateStatus = async (orderId, status) => {
 
        try {
 
            await axios.put(
                `http://localhost:8080/orders/${orderId}/status?status=${status}`
            );
 
            alert("Order status updated");
 
            loadOrders();
 
        } catch (error) {
 
            console.error(error);
            alert("Failed to update order status");
        }
    };
 
    return (
        <div className="container mt-4">
 
            <h2 className="text-center mb-4">
                Admin Order Management
            </h2>
 
            <table className="table table-bordered table-striped">
 
                <thead className="table-dark">
 
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Total Amount</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th>Payment</th>
                        <th>Update</th>
                    </tr>
 
                </thead>
 
                <tbody>
 
                    {orders.length > 0 ? (
 
                        orders.map((order) => (
 
                            <tr key={order.orderId}>
 
                                <td>{order.orderId}</td>
 
                                <td>
                                    {order.user
                                        ? order.user.name
                                        : "N/A"}
                                </td>
 
                                <td>
                                    {order.user
                                        ? order.user.email
                                        : "N/A"}
                                </td>
 
                                <td>
                                    ₹ {order.totalAmount}
                                </td>
 
                                {/* <td>
                                    {order.orderDate}
                                </td> */}
                                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                <td><span className={order.paymentStatus === "PAID" ? "badge bg-success"
                                    : "badge bg-warning text-dark"}>
                    {order.paymentStatus}</span></td>
 
                                <td>
                                    <select
                                        className="form-select"
                                        value={order.orderStatus}
                                        onChange={(e) =>
                                            updateStatus(
                                                order.orderId,
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="PLACED">
                                            PLACED
                                        </option>
 
                                        <option value="PREPARING">
                                            PREPARING
                                        </option>
 
                                        <option value="OUT_FOR_DELIVERY">
                                            OUT FOR DELIVERY
                                        </option>
 
                                        <option value="DELIVERED">
                                            DELIVERED
                                        </option>
                                    </select>
                                </td>
                                <td>
                                    Current:
                                    {" "}
                                    <strong>
                                        {order.orderStatus}
                                    </strong>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="8"
                                className="text-center"
                            >
                                No Orders Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
 
export default AdminOrders;