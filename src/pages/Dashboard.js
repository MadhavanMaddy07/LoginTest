import Navbar from "../components/Navbar";

function Dashboard() {

    return (

        <>
            <Navbar />

            <div className="container mt-5">

                <div className="card p-5">

                    <h2>Welcome to Dashboard</h2>

                    <p>You are successfully logged in.</p>

                </div>

            </div>

        </>
    );
}

export default Dashboard;