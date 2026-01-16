import React from 'react'
import { Link } from 'react-router-dom'

export default function Headers() {
    return (
        <header className="header">
            <div className="logo">
                <img src={require('../Assets/VAKIL.png')} alt="Vakilekta" />
                <h1>Vakilekta</h1>
            </div>

            <nav className="nav">
                <Link to="/privacy-policy">Privacy Policy</Link>
                {/* <Link to="/support">Support</Link> */}
                <Link to="/about-us">About Us</Link>
            </nav>
        </header>
    )
}
