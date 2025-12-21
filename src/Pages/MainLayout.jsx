import React from "react";
import { Outlet, Link, NavLink } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="main-header">
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/"}
        >
          ໜ້າຫຼັກ
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/about"}
        >
          ກ່ຽວກັບຂ້ອຍ
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "is-active" : "")}
          to={"/posts"}
        >
          ໂພສ
        </NavLink>
      </header>

      <Outlet />

      <footer>
        <Link to={"/"}>ໜ້າຫຼັກ</Link>
        <Link to={"/about"}>ກ່ຽວກັບຂ້ອຍ</Link>
      </footer>
    </div>
  );
};
export default MainLayout;
