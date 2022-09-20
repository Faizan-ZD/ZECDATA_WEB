import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../assest/images/zec.png"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg " id="header">
    <div class="container-fluid">
      <Link to="/"> <img src={logo} class="svg-logo" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="Navbar">
        <li class="nav-item">
            <Link class="nav-link"  to="/casestudy">Case Study</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"  to="/Our-Approach">Our Approach</Link>
          </li>
          
          <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/Our-Services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/Action">Action</Link></li>
            <li><Link class="dropdown-item" to="/Another">Another action</Link></li>
            <li><Link class="dropdown-item" to="/Something">Something else here</Link></li>
          </ul>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/aboutus">About Us</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/Blog">Blog</Link>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to="/Carrier">Carrier</Link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          
          <a href="https://wa.me/917898292816" target='_blank' class="btn btn-outline-primary" id="S_btn"  type="submit">Let's Talk</a>
        </form>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;