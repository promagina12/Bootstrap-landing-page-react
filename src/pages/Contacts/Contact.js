import React from 'react'
import "./Contact.scss"

import Lead from '../../components/Lead/Lead'

import image1 from "../../images/picture-2.png"
import image2 from "../../images/picture-3.png"
import image3 from "../../images/picture-4.png"

export default function Contact() {
    return (
      <section className="contact">
        <div className="container">
          <div className="tittle">
            <h2>Featured Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
              Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
            </p>
          </div>
        </div>

        <div className="content">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center flex-column align-items-center h-100">
                <Lead />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={image1}
                className="w-100"
                height="701px"
                alt="picture-2"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 picture-1">
              <img
                src={image2}
                className="w-100"
                height="701px"
                alt="picture-3"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center flex-column align-items-center h-100">
                <Lead />
              </div>
            </div>

            <div className="col-12 col-md-6 picture-2">
              <img
                src={image2}
                className="w-100"
                height="701px"
                alt="picture-3"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-center flex-column align-items-center h-100">
                <Lead />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={image3}
                className="w-100"
                height="701px"
                alt="picture-4"
              />
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Copyright 2017. All Rights Reserved.</span>
          </div>
        </footer>
      </section>
    );
}
