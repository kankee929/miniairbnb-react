import React from "react";

export default function JCard(props) {
  return (
    <div className="card">
      <img className="card--country" src={props.item.imageUrl} alt="image" />
      <div className="card--link">
        <img className="card---loclogo" src="/Images/pin.png" alt="" />
        <span>{props.item.location}</span>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <div className="card--locInfo">
          <h1>{props.item.title}</h1>
          <p className="card---date">
            {props.item.startDate}- {props.item.endDate}
          </p>
          <p>{props.item.description}</p>
        </div>
      </div>
      <hr className="card-break" />
    </div>
  );
}
