import DataBase from "../db/database";
import { NavLink } from "react-router-dom";
import { BsMessenger, BsSearch } from "react-icons/bs";
import { GiSewingMachine } from "react-icons/gi";
import { FaHandshake, } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RootURL } from "../App";
import HeaderImg from "../components/HeaderImg";

export default function Index() {

  return (
    <>
      <HeaderImg src={'./img/index.jpeg'} title={'Ropita y canastilla para su bebé'}></HeaderImg>
      <br></br>
      <div className="container">
        <p className="grey-text subtitle">
          Vista a su niña como una <em>princesa</em> y a su niño como un <em>caballero</em>.
          Ropa de calidad y confortable para su bebé.
          <br></br><br></br>
        </p>
        
        <div className="row grey-text">
          <div className="col s12 m12">
          El proceso es bien simple...
          <br></br><br></br>
          </div>
          <div className="center-align col s6 m6 rouded-rect blue darken-1">
            <p><BsSearch /></p>
            Busca lo que quieres
          </div>
          <div className="center-align col s6 m6 rouded-rect blue darken-1">
            <p><BsMessenger /></p>
            Déjanos saber
          </div>
          <div className="center-align col s12 m12 rouded-rect blue-text text-darken-2">
            <p><FaHandshake /> &nbsp; <GiSewingMachine /> &nbsp; <TbTruckDelivery /> </p>
            del resto nos encargamos nosotros...
          </div>
        </div>
        <br></br><br></br>
        <div className="row">
        {DataBase.getCategories().map((category) => {
          return (
            <div key={category.id} className="col s12 m4 px-3">
                <div className="card">
                  <NavLink to={`${RootURL}${category.url}`}>    
                    <div className="card-image">
                      <img className="lazy-img"
                        //width={h}
                        //height={h} 
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
        </div>
        <br></br>
        
      </div>
    </>
  );
}
