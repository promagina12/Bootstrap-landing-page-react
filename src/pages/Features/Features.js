import React from 'react'
import "./Features.scss"


import image1 from "../../images/umbrella.png";
import image2 from "../../images/coffee.png";
import image3 from "../../images/rewards.png";
import image4 from "../../images/box.png";
import image5 from "../../images/inbox.png";
import image6 from "../../images/settings.png";

import Card from "../../components/Card/Card"

export default function Features() {
    return (
        <section className="features">
      <div className="container" id="featured-3">
        <h2 className="pb2">Lorem ipsum dolor sit</h2>
        <p className="pbc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultrices
          accumsan ornare. Phasellus tristique ullamcorper luctus. Nunc varius
          ullamcorper felis. Nulla nibh ipsum, rutrum.
        </p>
        <div className="row g-5 py-5">
          <div className="col-12 col-sm-12 col-md-4">          
            <Card image={image1} label="Peace of Mind"/>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <Card image={image2} label="Coffee Breaks"/>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <Card image={image3} label="Rewards"/>
          </div>
        </div>
        <div className="row g-5 py-5">
          <div className="col-12 col-sm-12 col-md-4">
             <Card image={image4} label="Delivery"/>
            </div>
          
          <div className="col-12 col-sm-12 col-md-4"> 
             <Card image={image5} label="Inbox"/>
          </div>
          <div className="col-12 col-sm-12 col-md-4">
             <Card image={image6} label="Settings"/>
            </div>
        </div>
      </div>
    </section>
    )
}
