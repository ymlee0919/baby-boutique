import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataBase from "../db/database";
import ProductsList from "../components/ProductsList";


export default function Single({category, subCategory}) {
  // Load data
    let products = DataBase.findProducts(subCategory.id);
  
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
          </div>
          <br></br>
          <ProductsList products={products} price={subCategory.price}></ProductsList>
          <br></br>
        </div>
      </>
    );
}