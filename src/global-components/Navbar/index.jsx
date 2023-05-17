// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import NavbarStyles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer";

const Navbar = () => {
  return (
    <>
      <div>
        Navbar
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Outlet />
      <Footer/>
    </>
  )
}

export default Navbar