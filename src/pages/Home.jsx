import DataBase from "../db/database";
import { NavLink } from "react-router-dom";
import { BsMessenger, BsSearch } from "react-icons/bs";
import MessengerLink from "../helper/url";
import { RootURL } from "../App";

export default function Index() {

  let h = window.innerWidth * 0.9;

  return (
    <>
      <img
        src="./img/index.jpg"
        style={{
          width: "100%",
        }}
      ></img>

      <div className="container">
        <p className="center-align subtitle indigo-text text-darken-2">
          Todo lo que necesita para su bebé
        </p>
        {DataBase.getCategories().map((category) => {
          return (
            <div key={category.id}>
                <div className="card">
                  <NavLink to={`${RootURL}${category.url}`}>    
                    <div className="card-image">
                      <img className="lazy-img"
                        width={h}
                        height={h} 
                        src={RootURL + "img/" + category.img}></img>
                      <span className="card-title blue-shadow-text text-bold">
                        {category.name}
                      </span>
                    </div>
                  </NavLink>
                  <div className="card-content bg-white description-text grey-text text-darken-2">
                    {category.description}
                  </div>
                  <div className="card-action center-align">
                  <NavLink to={`${RootURL}${category.url}`}>
                    <BsSearch size={"12px"}></BsSearch> &nbsp;Ver todo
                  </NavLink>
                </div>
                </div>
              <br></br>
            </div>
          );
        })}
        <br></br>
        <div className="center-align">
          <a className="want-category-btn indigo white-text" href={MessengerLink('Hola, me interesaría comprar alguna ropa de bebé.')}>
            <BsMessenger size={"12px"}></BsMessenger> &nbsp; Me interesa
          </a>
        </div>
      </div>
      <br></br>
    </>
  );
}
