import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <Link className="login-button" type="button" to="/add">
                Add Todo
            </Link>
        </div>
    );
}

export default HomePage;