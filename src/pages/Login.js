import { useState } from "react";
import API from "../services/Api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const login = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("login/", data);

            localStorage.setItem("access", res.data.access);
            localStorage.setItem("refresh", res.data.refresh);


            navigate("/dashboard");

        } catch {

            alert("Invalid Username or Password");
        }
    };

    return (

        <div className="container mt-5">

            <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={login}>

                    <input
                        className="form-control mb-3"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />

                    <button className="btn btn-primary w-100">

                        Login

                    </button>

                </form>

                <Link
                    className="mt-3 text-center"
                    to="/register"
                >
                    Register
                </Link>

            </div>

        </div>

    );
}

export default Login;