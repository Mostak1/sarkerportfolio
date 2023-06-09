import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import About from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import Lottie from "lottie-react";
import js from "../assets/js.json";
import php from "../assets/php.json";
import mysql from "../assets/mysql.json";
import wordpress from "../assets/wordpress.json";
import angular from "../assets/angular.json";
import react from "../assets/react.json";

// import images
import myimg from "../assets/image/rp1-removebg-preview.png";
import s1 from "../assets/image/proectpic/s1.jpg";
import s2 from "../assets/image/proectpic/s2.jpg";
import s3 from "../assets/image/proectpic/s3.jpg";
import b3 from "../assets/image/proectpic/b3.jpg";
import b2 from "../assets/image/proectpic/b2.jpg";
import b1 from "../assets/image/proectpic/b1.jpg";
import j1 from "../assets/image/proectpic/j1.jpg";
import j2 from "../assets/image/proectpic/j2.jpg";
import j3 from "../assets/image/proectpic/j3.jpg";

export const Home = () => {
  const color1 = "#ffc82a";
  const customColor = "#ffffff";

  return (
    <div style={{ backgroundColor: customColor }}>
      <div id="home">
        <div className="container text-center my-5">
          <div className="row">
            <div className="col-md-6">
              <img
                className="rounded-circle "
                src={myimg}
                width="300px"
                height="300px"
                alt="Image"
              />
            </div>
            <div className="col-md-6">
              <h3 style={{ color: "black" }}>
                Hi, This Is{" "}
                <strong style={{ color: color1 }}>MD MOSTAK AHMED</strong>
              </h3>
              <h3 style={{ color: "black" }}>
                I'm{" "}
                <Typewriter
                  options={{
                    strings: ["UI/UX Designer", "Back-End Web Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <div className="fs-2 fw-bold ">Expart With-</div>
              <div className="row my-3">
                <div className="col">
                  <Lottie animationData={js} loop={true} />
                </div>
                <div className="col">
                  <Lottie animationData={php} loop={true} />
                </div>
                <div className="col">
                  <Lottie animationData={mysql} loop={true} />
                </div>
                <div className="col">
                  <Lottie animationData={wordpress} loop={true} />
                </div>
                <div className="col">
                  <Lottie animationData={angular} loop={true} />
                </div>
                <div className="col">
                  <Lottie animationData={react} loop={true} />
                </div>
              </div>
              <a
                className="btn btn-outline-primary text-black"
                href="https://drive.google.com/file/d/1Zevhx7Oyqp_Qy974QsFHXrFjRghcyhWz/view?usp=sharing"
                target="_blank"
                download
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        {/* **************
         ******Project Section*******
         ********************** */}
        <Projects />
        {/* **************
         ******Project Section*******
         ********************** */}
        {/* **************
         ******About Section*******
         ********************** */}
        <About />
        {/* **************
         ******About Section*******
         ********************** */}
        <br /> <br />
        <div className="container-xl">
          <h2 className="text-black">Works With:</h2>

          <div className="row ">
            <div className="col-md-4">
              <div className="card h-100">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={s1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={s2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={s3} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    Student Result Management System
                  </h4>
                  <p className="card-text">
                    Student Result Management System Allows Students To Check
                    View And See Their Results Online Using Their Login
                    Credentials. You Can Select Result Templates For Your
                    School, Educational Institute, University. Online Software
                    Also Allows Educational Institutes To Hold The Results Of
                    Unpaid Students.
                  </p>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={b1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={b2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={b3} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Online Code Editor (Bootstrap)</h4>
                  <p className="card-text">
                    Bootstrap is one of the most popular frontend framework for
                    web development. It has pre define CSS style and JS bundle
                    for faster web page development. This tool is using
                    bootstrap version v5.2 You can select or search top most
                    used code snippets and see the result. You also can write
                    your own custom code in text editor and run code on fly.
                  </p>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={j1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={j2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src={j3} className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    Web Development With Javascript
                  </h4>
                  <p className="card-text">
                    JavaScript is one of the most popular modern web
                    technologies! As your JavaScript skills grow, your websites
                    will enter a new dimension of power and creativity. However,
                    getting comfortable with JavaScript is more challenging than
                    getting comfortable with HTML and CSS
                  </p>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Contact />
      </div>
    </div>
  );
};
export default Home;
