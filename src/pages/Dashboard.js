import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/Api";

function Dashboard() {

    const [user, setUser] = useState({
        username: "",
        email: ""
    });

    const navigate = useNavigate();

    useEffect(() => {

        const fetchUser = async () => {

            try {

                const res = await API.get("user/");

                setUser(res.data);

            } catch (error) {

                console.log(error);

                navigate("/");

            }

        };

        fetchUser();

    }, [navigate]);

    const logout = () => {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        navigate("/");

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3 className="mb-0">
                                Dashboard
                            </h3>

                        </div>

                        <div className="card-body">

                            <h2 className="mb-3">
                                👋 Hi <span className="text-primary">{user.username}</span>,
                                Welcome Dashboard
                            </h2>

                            <hr />

                            <p>
                                <strong>Username :</strong> {user.username}
                            </p>

                            <p>
                                <strong>Email :</strong> {user.email}
                            </p>

                            <button
                                className="btn btn-danger mt-3"
                                onClick={logout}
                            >
                                Logout
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;