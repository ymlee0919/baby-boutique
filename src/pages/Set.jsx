import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataBase from "../db/database";
import ProductsSet from "../components/ProductsSet";


export default function Set({category, subCategory}) {
  // Load data
    let topProducts = DataBase.findProducts(subCategory.items[0]);
    let bottomProducts = DataBase.findProducts(subCategory.items[1]);
  
    return (
      <>
        <div className="container">
          <div className="center-align">
            <h5 className="indigo-text text-darken-3">{category.name}</h5>
            <h6 className="indigo-text text-darken-2">{subCategory.name}</h6>
            <br></br>
            <p className="description-text grey-text text-darken-2">
              {subCategory.description}
            </p>
          </div>
        </div>
            <p className="description-text indigo-text text-darken-1 p-3 blue lighten-4">
              Confeccione el juego a su gusto. Encuentre cómo lo quiere y déjenos saber.
            </p>
        
          <div className="container">
          <br></br>
          <ProductsSet topProducts={topProducts} bottomProducts={bottomProducts} subCategory={subCategory.name} price={subCategory.price}></ProductsSet>
          <br></br>
        </div>
      </>
    );
}