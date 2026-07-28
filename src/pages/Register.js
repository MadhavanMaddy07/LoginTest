import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/Api";
import "../css/register.css";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {

        e.preventDefault();

        setError("");
        setSuccess("");

        if (data.password !== data.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {

            setLoading(true);

            await API.post("register/", {
                username: data.username,
                email: data.email,
                password: data.password
            });

            setSuccess("Registration Successful.");

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (err) {

            setError("Registration Failed.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="register-page">

            <div className="container">

                <div className="row justify-content-center align-items-center vh-100">

                    <div className="col-lg-5 col-md-7">

                        <div className="card register-card shadow-lg">

                            <div className="card-body p-5">

                                <h2 className="text-center fw-bold">
                                    Create Account
                                </h2>

                                <p className="text-center text-muted mb-4">
                                    Join us today 🚀
                                </p>

                                {error &&

                                    <div className="alert alert-danger">

                                        {error}

                                    </div>

                                }

                                {success &&

                                    <div className="alert alert-success">

                                        {success}

                                    </div>

                                }

                                <form onSubmit={register}>

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
                                                placeholder="Username"
                                                name="username"
                                                onChange={handleChange}
                                                required
                                            />

                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">
                                            Email
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">

                                                <i className="bi bi-envelope"></i>

                                            </span>

                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
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
                                                placeholder="Password"
                                                name="password"
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

                                                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>

                                            </button>

                                        </div>

                                    </div>

                                    <div className="mb-4">

                                        <label className="form-label">
                                            Confirm Password
                                        </label>

                                        <div className="input-group">

                                            <span className="input-group-text">

                                                <i className="bi bi-lock-fill"></i>

                                            </span>

                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                                onChange={handleChange}
                                                required
                                            />

                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() =>
                                                    setShowConfirmPassword(!showConfirmPassword)
                                                }
                                            >

                                                <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>

                                            </button>

                                        </div>

                                    </div>

                                    <button
                                        className="btn btn-primary w-100"
                                        disabled={loading}
                                    >

                                        {loading ?

                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Creating Account...
                                            </>

                                            :

                                            "Register"

                                        }

                                    </button>

                                </form>

                                <hr />

                                <div className="text-center">

                                    Already have an account?

                                    <Link
                                        to="/"
                                        className="ms-2"
                                    >
                                        Login
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;