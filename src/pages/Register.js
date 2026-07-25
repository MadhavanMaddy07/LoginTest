import { useState } from "react";
import API from "../services/Api";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const register = async (e) => {

        e.preventDefault();

        try {

            await API.post("register/", data);

            alert("Registration Successful");

            navigate("/");

        } catch {

            alert("Registration Failed");
        }
    };

    return (

        <div className="container mt-5">

            <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>

                <h2 className="text-center mb-4">Register</h2>

                <form onSubmit={register}>

                    <input
                        className="form-control mb-3"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                    />

                    <input
                        className="form-control mb-3"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />

                    <button className="btn btn-success w-100">

                        Register

                    </button>

                </form>

            </div>

        </div>

    );
}

export default Register;