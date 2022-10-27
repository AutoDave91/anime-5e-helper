import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="navMenu">
            <Link to="/">
                <h1>Anime 5e Helper</h1>
            </Link>
            <nav className="nav-menu-container">
                <Link to="/character-builder">Build New Character</Link>
                <Link to='/art-pack'>Art Assets</Link>
                {/* <Link to='/character-bank'>View Characters</Link> */}
            </nav>
        </header>
    );
};

export default Navbar;