import React from "react";
 
function Navbar() {
 
    const role = localStorage.getItem("role");
 
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        window.location.href = "/";
    };
 
    return (
        <nav
            className="navbar navbar-dark shadow"
            style={{
                background: "linear-gradient(90deg,#141E30,#243B55)",
                padding: "15px 20px",
                borderBottom: "3px solid #FFB703"
            }}
        >
            <div className="container-fluid px-4">
 
                <span
                    className="navbar-brand"
                    style={{
                        color: "#FFB703",
                        fontSize: "28px",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        cursor: "pointer"
                    }}
                >
                    SmartPizza AI
                </span>
 
                <div className="d-flex gap-2">
 
                    {role === "ADMIN" && (
                        <button
                            className="btn btn-outline-light"
                            style={{
                                borderRadius: "10px",
                                fontWeight: "600",
                                minWidth: "120px"
                            }}
                            onClick={() => window.location.href = "/dashboard"}
                        >
                            📊 Dashboard
                        </button>
                    )}
 
                    <button
                        className="btn btn-outline-light"
                        style={{
                            borderRadius: "10px",
                            fontWeight: "600",
                            minWidth: "120px"
                        }}
                        onClick={() => window.location.href = "/pizzas"}
                    >
                        🍕 Pizzas
                    </button>
 
                    <button
                        className="btn btn-outline-light"
                        style={{
                            borderRadius: "10px",
                            fontWeight: "600",
                            minWidth: "120px"
                        }}
                        onClick={() =>
                            window.location.href =
                                role === "ADMIN"
                                    ? "/admin-orders"
                                    : "/orders"
                        }
                    >
                        📦 Orders
                    </button>
 
                    {role !== "ADMIN" && (
                        <button
                            className="btn btn-outline-light"
                            style={{
                                borderRadius: "10px",
                                fontWeight: "600",
                                minWidth: "120px"
                            }}
                            onClick={() => window.location.href = "/cart"}
                        >
                            🛒 Cart
                        </button>
                    )}
 
                    <button
                        className="btn btn-danger"
                        style={{
                            borderRadius: "10px",
                            minWidth: "120px",
                            fontWeight: "bold"
                        }}
                        onClick={logout}
                    >
                        🚪 Logout
                    </button>
 
                </div>
 
            </div>
        </nav>
    );
}
 
export default Navbar;