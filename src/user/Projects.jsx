import React from "react";
import "./Home.css";
import Lottie from "lottie-react";
import html from "../assets/html.json";
import php from "../assets/php.json";
import mysql from "../assets/mysql.json";

export const Projects = () => {
  return (
    <>
      <div className="container shadow-lg my-4 p-4">
        <h1 className="text-center">My Projects</h1>
        <hr />
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-md">
            <div class="card h-100">
              <div className="card-img-top">
                <Lottie animationData={html} loop={true} />
              </div>
              <div class="card-body">
                <h5 class="card-title">Html Bootstrap Portfolio</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
          <div class="col-md">
            <div class="card h-100">
              <div className="card-img-top row">
                <div className="col">
                  <Lottie animationData={php} loop={true} />
                </div>
                <div className="col">
                  <Lottie animationData={php} loop={true} />
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Html Bootstrap Portfolio</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
