import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/image/mostaklogogreen.png'
import './Home.css';
import { FaGithub,FaFacebook,FaTwitter,FaLinkedin } from 'react-icons/fa';

const Layout = () => {
  const customColor = 'rgb(10, 25, 47)';
  const customclr = 'rgba(0, 0, 0, 0.05)';
  return (
    <>
      <div class="container-xxl">
        <nav class="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: customColor }}>

          <a class="navbar-brand ms-2" href="#">
            <img class="" src={logo} alt="Mostak Ahmed" width="200px" height="60px" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mmb-lg-0 text-white">
                <li class="nav-item">
                  <Link class="nav-link active text-white" to="/" aria-current="page" href="">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to="about" href="#about">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" href="#project" to='project'>Projects</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" href="" to="/contact">Contact Us</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-white" to='/blogs' href="">Blogs</Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success text-white me-2" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

      </div>
      <div className='' style={{ marginTop: 60 }}>
      <div class="container-xxl" id="sideicon">
            <a href="https://www.facebook.com/mdmostak.ahmedsarker"><FaFacebook/></a><br/>
            <a href="https://twitter.com/MDSMOSTAK"><FaTwitter /></a><br/>
            <a href="https://github.com/Mostak1"><FaGithub /></a><br/>
            <a href="https://linkedin.com/in/md-mostak-ahmed-b936a1179"><FaLinkedin /></a>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

        <Outlet />
      </div>
      <div style={{ backgroundColor: customColor }}>

        {/* <!-- Footer --> */}
        <footer class="container-xl text-center text-lg-start  text-muted" >
          {/* <!-- Section: Social media --> */}
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}
            <div class="me-5 d-none d-lg-block">
              {/* <span>Get connected with us on social networks:</span> */}
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>



              <a href="https://www.facebook.com/mdmostak.ahmedsarker" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/MDSMOSTAK" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="linkedin.com/in/md-mostak-ahmed-b936a1179" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Mostak1" class="me-4 text-reset">
                <i class="fab fa-github"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section class="">
            <div class="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div class="row mt-3">
                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Web Design & Development
                  </h6>

                  <p>
                    Web design and development is an umbrella term that describes the process of creating a
                    website. Like the name suggests, it involves two major skill sets: web design and web
                    development. Web design determines the look and feel of a website, while web development
                    determines how it functions.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Bootstrap</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">JavaScript</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Laravel</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" class="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset">Help</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i class="fas fa-home me-3"></i> Shenpara Parbata,Mirpur-10, Dhaka-1216 </p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    mostakidb@gmail.com
                  </p>
                  <p><i class="fas fa-phone me-3"></i> +8801752243665 </p>
                  <p><i class="fas fa-print me-3"></i> + 01000000000 </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-4" style={{ backgroundColor: customclr }}>
            © 2023 Copyright:
            <a class="text-reset fw-bold" href="">Mostak Ahmed </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer >
        {/* // < !--Footer --> */}
      </div>
    </>
  )
};
export default Layout;