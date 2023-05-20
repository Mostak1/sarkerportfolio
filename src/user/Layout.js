import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/image/mostaklogogreen.png'


const Layout = () => {
  const customColor = 'rgb(10, 25, 47)';
    return (
      <>
      <div class="container-xxl">
        <nav class="navbar navbar-expand-lg fixed-top" style={{backgroundColor:customColor}}>

            <a class="navbar-brand ms-2" href="#">
                <img class="" src={logo} alt="Mostak Ahmed" width="200px" height="60px"/>
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
                        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success text-white me-2" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </div>
  <div className='' style={{marginTop:60}}>
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
      </>
    )
  };
export default Layout;