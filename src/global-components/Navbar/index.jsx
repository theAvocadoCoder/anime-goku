// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import NavbarStyles from "./Navbar.module.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default Navbar