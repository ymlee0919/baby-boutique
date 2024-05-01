import { NavLink } from "react-router-dom";
import {BsMessenger, BsSearch} from "react-icons/bs"
import MessengerLink from "../helper/url";

function buildMessage(category, subCategory) {
  return `Hola, dentro de sus ofertas de ${category.toLowerCase()} me interesaría algún tipo de ${subCategory.toLowerCase()}.`;
}

export default function SubCategory({ category, subCategory, parentUrl }) {
  return (
    <>
      <div className="card">
        <NavLink to={"/" + parentUrl + "/" + subCategory.url}>
          <div className="card-image">
            <img src={"./img/category/" + subCategory.img}></img>
            <span className="card-title indigo-text text-darken-2 white-shadow-text text-bold">
              {subCategory.name}
            </span>
            <span className="btn-floating deep-orange darken-4 halfway-fab price-btn center-align">
              <span>$ {subCategory.price}</span>
            </span>
          </div>
        </NavLink>
        <div className="card-content description-text grey-text text-darken-2">
          {subCategory.description}
        </div>
        <div className="card-action center-align">
          <NavLink to={"/" + parentUrl + "/" + subCategory.url}>
            <BsSearch size={"12px"}></BsSearch> &nbsp;Ver todo
          </NavLink>{" "}
          &nbsp; &nbsp;
          <a
            className="want-category-btn indigo accent-2 white-text"
            href={MessengerLink(buildMessage(category, subCategory.name))}
          >
            <BsMessenger size={"12px"}></BsMessenger> &nbsp; Me interesa
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}
