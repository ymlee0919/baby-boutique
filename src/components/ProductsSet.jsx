import { useRef, useEffect, useId } from "react";
import { M } from "@materializecss/materialize";
import { BsMessenger } from "react-icons/bs";
import MessengerLink from "../helper/url";
import { RootURL } from "../App";

function buildMessage(subCategory, topProductName, bottomProductName) {
  console.log(topProductName);
  console.log(bottomProductName);
  return `Hola, de sus ofertas de ropa de bebé hay algo que me interesa, ${subCategory.toLowerCase()}. 
  Me gustaría con ${topProductName.toLowerCase()} y ${bottomProductName.toLowerCase()}.`;
}

export default function ProductsSet({ topProducts, bottomProducts, subCategory, price }) {
  if (topProducts.length === 0 || bottomProducts.length === 0)
    return (
      <p className="red-text center-align">
        <br></br>
        Lo sentimos, no tenemos disponibilidad del producto seleccionado.
      </p>
    );

  // Init carousel
  let topCarousel = useRef(null);
  let bottomCarousel = useRef(null);
  let topProductName = useRef(topProducts[0].name);
  let bottomProductName = useRef(bottomProducts[0].name);
  let btnId = useId();

  useEffect(() => {
    let topInstance = M.Carousel.init(topCarousel.current, {
      fullWidth: true,
      indicators: true,
      onCycleTo : function(elem, dragged){
        topProductName.current = elem.attributes["data-name"].value;
        document.getElementById(btnId).href = MessengerLink(
          buildMessage(subCategory, topProductName.current, bottomProductName.current)
        );
      }
    });

    let bottomInstance = M.Carousel.init(bottomCarousel.current, {
      fullWidth: true,
      indicators: true,
      onCycleTo : function(elem, dragged){
        bottomProductName.current = elem.attributes["data-name"].value;
        document.getElementById(btnId).href = MessengerLink(
          buildMessage(subCategory, topProductName.current, bottomProductName.current)
        );
      }
    });

    const unmount = () => {
      if (!!topInstance) topInstance.destroy();
      if (!!bottomInstance) bottomInstance.destroy();
    };

    return unmount;
  }, []);

  // Build each carousel item
  let topList = topProducts.map((product) => {
    if(!product.active) return null;
    
    return (
      <a
        className="carousel-item"
        key={product.id}
        href={"#" + product.id + "!"}
        data-name={product.name}
      >
        <img src={RootURL + "img/product/" + product.img}></img>
      </a>
    );
  });

  let bottomList = bottomProducts.map((product) => {
    if(!product.active) return null;
    
    return (
      <a
        className="carousel-item"
        key={product.id}
        href={"#" + product.id + "!"}
        data-name={product.name}
      >
        <img src={RootURL + "img/product/" + product.img}></img>
      </a>
    );
  });

  // Return the carousel
  return (
    <>
      <div
        className="carousel carousel-slider product-image-wrapper carousel-top-wrapper"
        ref={topCarousel}
      >
        {topList}
      </div>

      <div
        className="carousel carousel-slider product-image-wrapper carousel-bottom-wrapper"
        ref={bottomCarousel}
      >
        <div className="carousel-fixed-item center">
          <div className="right-align">
            <span className="price-label deep-orange darken-4 center-align">
              ${price}
            </span>
          </div>
        </div>
        {bottomList}
      </div>

      <span className="grey-text text-darken-2 py-1 px-2 mt-1 block blue lighten-4 border-left">
        * Deslice las imágenes para ver las ofertas
      </span>
      <br></br>

      <div className="center-align">
        <br></br>
        <a
          id={btnId}
          className="want-category-btn indigo white-text"
          href={MessengerLink(buildMessage(subCategory, topProductName.current, bottomProductName.current))}
        >
          <BsMessenger size={"12px"}></BsMessenger> &nbsp; Me interesa
        </a>
      </div>
    </>
  );
}
