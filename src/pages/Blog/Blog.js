import React from 'react'
import "./Blog.scss"

import image1 from "../../images/play.png";

export default function Blog() {
    return (
      <section className="blog">
        <div className="container">
          <div className="play">
            <img src={image1} alt="play" />
          </div>
          <div className="content">
            <h2>Our Case Studies</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
              Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
            </p>
          </div>
        </div>
      </section>
    );
}
