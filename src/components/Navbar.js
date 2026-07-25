import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        navigate("/");
    };

    return (

        <nav className="navbar navbar-dark bg-dark">

            <div className="container">

                <Link className="navbar-brand" to="/dashboard">
                    Login System
                </Link>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );
}

export default Navbar;