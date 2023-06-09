import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/image/mostaklogogreen.png";
import "./Home.css";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/10160-home-icon-loading.json";
import logol from "../assets/logotic.json";
import about from "../assets/about.json";
import projects from "../assets/projects.json";
import contact from "../assets/contact.json";
import blog from "../assets/blog.json";
import logom from "../assets/logom.json";
import welcome from "../assets/welcome.json";

const Layout = () => {
  const customColor = "rgb(10, 25, 47)";
  const customclr = "rgba(0, 0, 0, 0.05)";
  return (
    <>
      <div className="container-xxl navs">
        <nav className="navbar navbar-expand-lg ">
          <a
            className="navbar-brand ms-5"
            href="#home"
            style={{ width: "100px" }}
          >
            <Lottie animationData={logom} loop={true} />
            {/* <img className="" src={logo} alt="Mostak Ahmed" width="200px" height="60px" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mmb-lg-0 text-black">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-black mx-4"
                    style={{ width: "50px" }}
                    to="/"
                    aria-current="page"
                    href=""
                  >
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black mx-4"
                    style={{ width: "50px" }}
                    to="about"
                    href="#about"
                  >
                    <Lottie animationData={about} loop={true} />
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black mx-4"
                    style={{ width: "70px" }}
                    href="#project"
                    to="project"
                  >
                    <Lottie animationData={projects} loop={true} />
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black mx-4"
                    style={{ width: "50px" }}
                    href=""
                    to="/contact"
                  >
                    <Lottie animationData={contact} loop={true} />
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-black mx-4"
                    style={{ width: "56px" }}
                    to="/blogs"
                    href=""
                  >
                    <Lottie animationData={blog} loop={true} />
                    Blogs
                  </Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success text-black me-2" type="submit">Search</button>
              </form> */}
              <div
                className="d-flex me-5"
                style={{ with: "300px", height: "100px" }}
              >
                <Lottie animationData={welcome} loop={true} />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="" style={{ marginTop: 60 }}>
        <div className="container-xxl" id="sideicon">
          <a href="https://www.facebook.com/mdmostak.ahmedsarker">
            <FaFacebook />
          </a>
          <br />
          <a href="https://twitter.com/MDSMOSTAK">
            <FaTwitter />
          </a>
          <br />
          <a href="https://github.com/Mostak1">
            <FaGithub />
          </a>
          <br />
          <a href="https://linkedin.com/in/md-mostak-ahmed-b936a1179">
            <FaLinkedin />
          </a>
        </div>

        {/* ...............................
........Main Content here........
................................... */}
        <Outlet />
        {/* ...............................
........Main Content here........
................................... */}
      </div>
      <div>
        {/* <!-- Footer --> */}
        <footer className="container-xl mt-5 text-center text-lg-start  text-dark">
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
              {/* <span>Get connected with us on social networks:</span> */}
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a
                href="https://www.facebook.com/mdmostak.ahmedsarker"
                className="me-4 text-reset"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/MDSMOSTAK"
                className="me-4 text-reset"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="linkedin.com/in/md-mostak-ahmed-b936a1179"
                className="me-4 text-reset"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Mostak1" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Web Design & Development
                  </h6>

                  <p>
                    Web design and development is an umbrella term that
                    describes the process of creating a website. Like the name
                    suggests, it involves two major skill sets: web design and
                    web development. Web design determines the look and feel of
                    a website, while web development determines how it
                    functions.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Bootstrap
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      JavaScript
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Shenpara
                    Parbata,Mirpur-10, Dhaka-1216{" "}
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    mostakidb@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> +8801752243665{" "}
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01000000000{" "}
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-4"
            style={{ backgroundColor: customclr }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="">
              Mostak Ahmed{" "}
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* // < !--Footer --> */}
      </div>
    </>
  );
};
export default Layout;
