import React from "react";

export default function CardImages(props) {
  return (
    <>
      <div className="feature-icon">
        <img src={props.src} alt="umbrella" />
      </div>
      <h5>{props.label}</h5>
    </>
  );
}
