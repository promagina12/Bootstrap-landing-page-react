import React from 'react'
import "./Lead.scss"

import MainButton from "../Button/MainButton";

export default function Lead() {
    return (
      <div className="px-3">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus.
        </p>
        <>
          <MainButton />
        </>
      </div>
    );
}
