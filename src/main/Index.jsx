import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {MdChevronLeft, MdMenu, MdOutlineHome} from "react-icons/md"
import { useEffect } from "react";
import { M } from "@materializecss/materialize";
import DataBase from "../db/database";
import ScrollToTop from "./ScrollToTop";
import { RootURL } from "../App";


export default function Index()
{
  let navigate = useNavigate();

  useEffect(() => {
    let elems = document.querySelectorAll(".dropdown-trigger");
    let instances = M.Dropdown.init(elems, {
      constrainWidth: false,
      coverTrigger: false
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="navbar-fixed ">
        <nav className="light-blue lighten-5">
          <div className="nav-wrapper container">
            <span className="brand-logo right">
              <img src={RootURL + "img/logo.png"}></img>
            </span>
          </div>
        </nav>
      </div>
      <div id="woking-area">
        <Outlet />
      </div>
      <div className="navbar-fixed">
        <nav className="white bottom-bar">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s4 center-align">
                <a
                  className="dropdown-trigger grey-text text-darken-2"
                  href="#!"
                  data-target="bottom-menu"
                >
                  <MdMenu size={"1.4rem"}></MdMenu>
                </a>
                <ul id="bottom-menu" className="dropdown-content">
                  {DataBase.getCategories().map((category) => {
                    return (
                      <li key={category.id}>
                        <NavLink to={`${RootURL}${category.url}`}>
                          {category.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col s4 center-align">
                <NavLink to={RootURL} className="grey-text text-darken-2">
                  <MdOutlineHome size={"1.4rem"}></MdOutlineHome>
                </NavLink>
              </div>
              <div className="col s4 center-align">
                <a
                  href="#!"
                  onClick={() => navigate(-1)}
                  className="grey-text text-darken-2"
                >
                  <MdChevronLeft size={"1.4rem"}></MdChevronLeft>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}