import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <h4>Vakilekta</h4>
            <p>Connecting Advocates & Clients Seamlessly</p>

            <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/support">Support</Link>
                <Link to="/about-us">About Us</Link>
            </div>

            <p className="copyright">
                © 2026 Vakilekta. All rights reserved.
            </p>
        </footer>
    )
}
