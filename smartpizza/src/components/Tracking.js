import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
function Tracking() {
 
    const { orderId } = useParams();
 
    const [status, setStatus] = useState("Order Confirmed");
 
    useEffect(() => {
 
        const statuses = [
            "Order Confirmed",
            "Preparing Pizza",
            "Out For Delivery",
            "Delivered"
        ];
 
        let index = 0;
 
        const interval = setInterval(() => {
 
            index++;
 
            if (index < statuses.length) {
                setStatus(statuses[index]);
            } else {
                clearInterval(interval);
            }
 
        }, 5000);
 
        return () => clearInterval(interval);
 
    }, []);
 
    return (
        <div className="container mt-5">
 
            <div className="card shadow p-5 text-center">
 
                <h2>🚚 Live Delivery Tracking</h2>
 
                <hr />
 
                <h3 className="text-success">
                    Order #{orderId}
                </h3>
 
                <h2 className="mt-4">
                    {status}
                </h2>
                <div className="alert alert-info mt-3">
    🤖 AI ETA Prediction:
    {
        status === "Order Confirmed" ? " 30 mins" :
        status === "Preparing Pizza" ? " 20 mins" :
        status === "Out For Delivery" ? " 10 mins" :
        " Delivered"
    }
</div>
 
            </div>
 
        </div>
    );
}
 
export default Tracking;