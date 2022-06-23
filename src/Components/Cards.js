import React from "react";
import { ImLocation } from "react-icons/im";

export default function Card(props) {
  return (
    <main>
      <img src={props.item.imageUrl} alt="" />
      <div className="About">
        <div className="location">
          <ImLocation className="checkpoint" />
          <h3>{props.item.location}</h3>
          <span>View on Google Maps</span>
        </div>
        <h1>{props.item.title}</h1>
        <div className="description">
          <span>
            {props.item.startDate} - {props.item.endDate}
          </span>
          <p>{props.item.description}</p>
        </div>
      </div>
    </main>
  );
}
