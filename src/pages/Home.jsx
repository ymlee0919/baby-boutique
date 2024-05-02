import DataBase from "../db/database";
import { NavLink } from "react-router-dom";
import { BsMessenger } from "react-icons/bs";
import MessengerLink from "../helper/url";
import { RootURL } from "../App";

export default function Index() {
  return (
    <>
      <img
        src="./img/index.jpg"
        style={{
          width: "100%",
        }}
      ></img>

      <div className="container">
        <p className="center-align subtitle grey-text text-darken-2">
          Todo lo que necesita para su bebé
        </p>
        {DataBase.getCategories().map((category) => {
          return (
            <div key={category.id}>
              <NavLink to={`${RootURL}${category.url}`}>
                <div className="card">
                  <div className="card-image">
                    <img src={RootURL + "img/" + category.img}></img>
                    <span className="card-title indigo-text text-darken-5 white-shadow-text text-bold">
                      {category.name}
                    </span>
                  </div>
                </div>
              </NavLink>
              <br></br>
            </div>
          );
        })}
        <br></br>
        <div className="center-align">
          <a className="want-category-btn indigo accent-2 white-text" href={MessengerLink('Hola, me interesaría comprar alguna ropa de bebé.')}>
            <BsMessenger size={"12px"}></BsMessenger> &nbsp; Me interesa
          </a>
        </div>
      </div>
      <br></br>
    </>
  );
}
