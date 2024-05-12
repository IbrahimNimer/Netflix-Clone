import { Link } from "react-router-dom";
import './NavBar.css';

function NavBar(){
    return(
        <nav className="navbar">
            <h1 className="logo">IbrahimFlix</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favlist" className="nav-link">Favorite</Link>
            </div>
        </nav>
    );
}

export default NavBar;
