import React from 'react'

export default function FeatureCard({ title, description }) {
    return (
        <div className="p-6 border rounded-2xl shadow-sm">
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p>{description}</p>
        </div>
    )
}
