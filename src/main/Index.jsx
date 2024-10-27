import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {MdChevronLeft, MdMenu, MdOutlineHome} from "react-icons/md"
import { RiShieldCheckFill } from "react-icons/ri";
import {FaHeartCircleCheck, FaMedal } from "react-icons/fa6";
import { useEffect } from "react";
import { M } from "@materializecss/materialize";
import DataBase from "../db/database";
import ScrollToTop from "./ScrollToTop";
import { RootURL } from "../App";


export default function Index()
{
  let navigate = useNavigate();

  useEffect(() => {
    let dropdowns = document.querySelectorAll(".dropdown-trigger");
    let instances = M.Dropdown.init(dropdowns, {
      constrainWidth: false,
      coverTrigger: false
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="navbar-fixed ">
        <nav className="light-blue lighten-5">
          <div className="nav-wrapper">
            <span className="brand-logo right">
              <img src={RootURL + "img/logo.png"}></img>
            </span>
            <ul id="nav-mobile" className="left">
              <li>
                <a
                  className="dropdown-trigger grey-text text-darken-2"
                  href="#!"
                  data-target="bottom-menu"
                  style={{
                    padding: '11px 7px 3px 7px',
                    lineHeight: 3
                  }}
                >
                  <MdMenu size={"1.4rem"}></MdMenu>
                </a>
                <ul id="bottom-menu" className="dropdown-content">
                  <li>
                        <NavLink to={`${RootURL}`}>
                          Inicio
                        </NavLink>
                      </li>
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
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="woking-area" className="working-area">
        <Outlet />
      </div>
      <div id="footer" className="footer blue darken-2 white-text">
      <h4 className="footer-header">BabyBoutique</h4>
        <div className="container">
            <p className="footer-item"><span className="footer-icon"><FaHeartCircleCheck/></span> <span className="footer-text">Belleza y confort para su niño</span></p>
            <p className="footer-item"><span className="footer-icon"><FaMedal/></span> <span className="footer-text">Calidad en el producto</span></p>
            <p className="footer-item"><span className="footer-icon"><RiShieldCheckFill/></span> <span className="footer-text">Seriedad y seguridad en el servicio</span></p>
        </div>
      </div>
      <a href="#!" onClick={() => navigate(-1)} className="btn back-btn white grey-text z-depth-1 rounded waves-effect waves-light">
        <MdChevronLeft size={"1.7rem"}></MdChevronLeft>
      </a>
    </>
  );
}