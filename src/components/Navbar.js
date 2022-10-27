import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="navMenu">
            <Link to="/">
                <h1>Anime 5e Helper</h1>
            </Link>
            <nav className="nav-menu-container">
                <Link to="/build-character">Build New Character</Link>
                <Link to='/legal'>Art Assets</Link>
            </nav>
        </header>
    );
};

export default Navbar;