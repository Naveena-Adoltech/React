import React from "react"
import './Card.css'


export default function Card(props) {
    return (
        <div className="card-container">
            <div className="main-container">
          
            <img src={props.ImageURL ? `./images/${props.ImageURL}` : './images/fallback.jpg'} className="main-image" alt="card"
/>

            </div>
            <div className="info">
                <div className="location">
                  <img src={'../images/location.png'} className="small-icon" alt="location-icon" /> 
                  <h6>{props.location}</h6>
                  <a href={props.GoogleMapURL}>View on Google Maps</a>
                 </div>
                 <h2 className="title">{props.title}</h2>
                 <h6 className="date">{props.startDate}-{props.endDate}</h6> 
                 <p className="description">{props.description}</p>
            </div>
        </div>
    );
}