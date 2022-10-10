import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="container">
            <Link to="/">
                <h1>Anime 5e Helper</h1>
            </Link>
            <nav className="nav-menu-container">
                <div>
                    <Link to="/build-character">Build New Character</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;