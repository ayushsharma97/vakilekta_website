import React from 'react'

export default function HeroSection() {
    return (
        <section className="hero">
            <h2>Connecting Advocates Seamlessly</h2>
            <p>
                Vakilekta is a modern legal platform designed for advocates to log in securely using their registration number, showcase their expertise, and connect with peers. With intuitive map and search features, advocates can quickly locate and collaborate with other professionals, streamlining legal support and networking.
            </p>

            <button style={{marginRight:'10px'}}>Download for Android</button>
            
            <button onClick={()=>{alert("Coming soon on ios")}}>Download for ios</button>

        </section>
    )
}
