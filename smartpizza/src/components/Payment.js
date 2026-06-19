import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
 
function Payment() {
 
    const { orderId } = useParams();
 
    const [paymentMethod, setPaymentMethod] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
 
    const handlePayment = async () => {
        
 
        if (!paymentMethod) {
            alert("Please select payment method");
            return;
        }
 
        try {
 
            setLoading(true);
 
            await axios.put(
                `http://localhost:8080/payments/${orderId}`
            );
 
            setSuccess(true);
 
        } catch (error) {
 
            console.log(error);
            alert("Payment Failed");
 
        } finally {
            setLoading(false);
        }
    };
 
    return (
        <div className="container mt-5">
 
            <div
                className="card shadow-lg p-4 mx-auto"
                style={{ maxWidth: "700px" }}
            >
 
                <h2 className="text-center mb-4">
                    💳 Payment Gateway
                </h2>
 
                <hr />
 
                <h5>
                    Order ID :
                    <span className="text-primary">
                        {" "}
                        {orderId}
                    </span>
                </h5>
 
                <h5>
                    Amount :
                    <span className="text-success">
                        {" "}₹300
                    </span>
                </h5>
 
                <hr />
 
                {!success && (
                    <>
                        <h4 className="mb-3">
                            Select Payment Method
                        </h4>
 
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="UPI"
                                checked={paymentMethod === "UPI"}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <label className="form-check-label">
                                📱 UPI
                            </label>
                        </div>
 
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="CARD"
                                checked={paymentMethod === "CARD"}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <label className="form-check-label">
                                💳 Credit / Debit Card
                            </label>
                        </div>
 
                        <div className="form-check mb-4">
                            <input
                                className="form-check-input"
                                type="radio"
                                value="COD"
                                checked={paymentMethod === "COD"}
                                onChange={(e) =>
                                    setPaymentMethod(e.target.value)
                                }
                            />
                            <label className="form-check-label">
                                🚚 Cash On Delivery
                            </label>
                        </div>
 
                        <button
                            className="btn btn-success w-100"
                            onClick={handlePayment}
                            disabled={loading}
                        >
                            {loading
                                ? "Processing..."
                                : "Pay Now"}
                        </button>
                    </>
                )}
 
                {success && (
                    <div className="text-center">
 
                        <div
                            className="alert alert-success mt-3"
                        >
                            <h4>
                                ✅ Payment Successful
                            </h4>
 
                            <p>
                                Payment Method :
                                <b> {paymentMethod}</b>
                            </p>
                        </div>
 
                        <a
                            href={`http://localhost:8080/orders/invoice/pdf/${orderId}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            📄 Download Invoice
                        </a>
 
                    </div>
                )}
 
            </div>
 
        </div>
    );
}
 
export default Payment;