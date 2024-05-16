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
            <h3 className="indigo-text text-darken-3">{category.name}</h3>
            <h4 className="indigo-text text-darken-2">{subCategory.name}</h4>
            <br></br>
            <p className="description-text grey-text text-darken-2">
              {subCategory.description}
            </p>
            <p className="description-text grey-text text-darken-2">
              Confeccione el juego a su gusto. Encuentre cómo lo quiere y déjenos saber.
            </p>
          </div>
          <br></br>
          <ProductsSet topProducts={topProducts} bottomProducts={bottomProducts} subCategory={subCategory.name} price={subCategory.price}></ProductsSet>
          <br></br>
        </div>
      </>
    );
}