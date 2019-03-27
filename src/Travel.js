import React from "react";


const Travel = props => (
  <div>
      <div>{props.destination}</div>
      <div>{props.country}</div>
      <img src={props.image}/>
      <div>{props.distance}</div>
  </div>
);

export default Travel;