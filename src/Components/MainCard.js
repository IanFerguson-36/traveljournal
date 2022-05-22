import React from "react";
// import Logo from "../../public/images/pinlogo.png";

export default function Maincard(props) {
  return (
    <div className="card-container">
      <img className="place-pic" src={`/images/${props.item.imageUrl}`}></img>

      <div className="info-container">
        <div className="google-container">
          <img
            className="maps-logo"
            src="/images/pinlogo.png"
            alt="googlemaps pin logo"
          />
          <h3 className="location">{props.item.location}</h3>
          <a className="maps-link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="title"> {props.item.title}</h1>
        <h3 className="timeline">
          {props.item.startDate} - {props.item.endDate}
        </h3>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  );
}
