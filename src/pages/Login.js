import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../api";
import "../css/login.css";

export default function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const login = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {

            const res = await API.post("login/", data);

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);

            navigate("/dashboard");

        } catch (err) {

            setError("Invalid username or password.");

        } finally {

            setLoading(false);
        }
    };

    return (

        <div className="login-page">

            <div className="container">

                <div className="row justify-content-center align-items-center vh-100">

                    <div className="col-lg-4 col-md-6">

                        <div className="card login-card shadow-lg border-0">

                            <div className="card-body p-5">

                                <h2 className="text-center fw-bold mb-2">
                                    Welcome Back 👋
                                </h2>

                                <p className="text-center text-muted mb-4">
                                    Login to your account
                                </p>

                                {error && (

                                    <div className="alert alert-danger">
                                        {error}
                                    </div>

                                )}

                                <form onSubmit={login}>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Username
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                <i className="bi bi-person"></i>
                                            </span>

                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                placeholder="Enter Username"
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Password
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">
                                                <i className="bi bi-lock"></i>
                                            </span>

                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control"
                                                name="password"
                                                placeholder="Enter Password"
                                                onChange={handleChange}
                                                required
                                            />

                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() =>
                                                    setShowPassword(!showPassword)
                                                }
                                            >
                                                <i
                                                    className={
                                                        showPassword
                                                            ? "bi bi-eye-slash"
                                                            : "bi bi-eye"
                                                    }
                                                ></i>
                                            </button>

                                        </div>

                                    </div>

                                    <div className="d-flex justify-content-end mb-3">

                                        <Link
                                            to="/forgot-password"
                                            className="text-decoration-none"
                                        >
                                            Forgot Password?
                                        </Link>

                                    </div>

                                    <button
                                        className="btn btn-primary w-100"
                                        disabled={loading}
                                    >

                                        {loading ? (

                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Logging in...
                                            </>

                                        ) : (

                                            "Login"

                                        )}

                                    </button>

                                    <div className="text-center mt-4">

                                        Don't have an account?

                                        <Link
                                            className="ms-2"
                                            to="/register"
                                        >
                                            Register
                                        </Link>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}