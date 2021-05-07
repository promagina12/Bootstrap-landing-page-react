import React from "react";
import "./MainContainer.scss";
import MainButton from "../../components/Button/MainButton";

export default function MainContainer() {
  return (
    <div className="container">
      <div className="main-content">
        <main className="px-3">
          <h1>Lorem ipsum</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <MainButton />
        </main>
      </div>
    </div>
  );
}
