import React from 'react'
import FeatureCard from './FeatureCard'

export default function FeatureSection() {
    return (
        <section className="features">
            <h3>Our Features</h3>

            <div className="feature-grid">
                <div className="feature-card">
                    <h4>Advocate Discovery</h4>
                    <p>Search advocates by location, name, and address.</p>
                </div>

                <div className="feature-card">
                    <h4>Verified Profiles</h4>
                    <p>All advocates are verified for trust and reliability.</p>
                </div>

                <div className="feature-card">
                    <h4>Easy Communication</h4>
                    <p>Secure and seamless communication tools.</p>
                </div>

                 <div className="feature-card">
                    <h4>Map Search</h4>
                    <p>Search your near by advocate.</p>
                </div>
            </div>
        </section>
    )
}
