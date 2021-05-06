import React from 'react'
import "./Work.scss"
import Button from "../../components/Button/Button"

import image1 from "../../images/picture-1.png";

export default function Work() {
    return (
       <section className="work">
      <div className="row">
        <div className="col-12 col-md-6">
          <div
            className="d-flex justify-content-center flex-column align-items-center h-100"
          >
            <div className="px-3">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                ultrices accumsan ornare. Phasellus tristique ullamcorper
                luctus.
              </p>
              <p className="lead content">
                <Button />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img
            src={image1}
            className="w-100"
            height="701px"
            alt="picture-1"
          />
        </div>
      </div>
    </section>
    )
}
