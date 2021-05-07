import React from 'react'
import "./Work.scss"

import image1 from "../../images/picture-1.png";
import Lead from '../../components/Lead/Lead';

export default function Work() {
    return (
       <section className="work">
      <div className="row">
        <div className="col-12 col-md-6">
          <div
            className="d-flex justify-content-center flex-column align-items-center h-100"
          >
            <Lead />
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
