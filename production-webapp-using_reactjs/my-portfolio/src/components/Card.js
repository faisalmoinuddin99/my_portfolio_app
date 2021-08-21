import React from 'react'
import './CardStyle.css'
import profile from './images/profile.jpg'

export default function Card(props) {
    return (
        <div className="main-content">
            <div className="card">
                <img src={profile} alt="faisal" />
                <h2 className="primary">{props.myName}</h2>
                <p>{props.designation}</p>
                <button className="btn">About</button>
            </div>
        </div>

    )
}
