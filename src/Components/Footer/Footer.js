import './Footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/">Home</Link>
                    <Link to="/favlist">Favorite List</Link>
                </div>
                <div className="social-icons">
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 IbrahimFlix. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;


