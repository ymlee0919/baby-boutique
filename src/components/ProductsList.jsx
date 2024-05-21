import { useRef, useEffect, useId } from "react";
import { M } from "@materializecss/materialize";
import { BsMessenger } from "react-icons/bs";
import MessengerLink from "../helper/url";
import { RootURL } from "../App";

function buildMessage(productName) {
  return `Hola, de sus ofertas de ropa de bebé hay algo que me interesa, ${productName.toLowerCase()}.`;
}

export default function ProductsList({ products, price }) {
  if (products.length === 0)
    return (
      <p className="red-text center-align">
        <br></br>
        Lo sentimos, no tenemos disponibilidad del producto seleccionado.
      </p>
    );

  // Init carousel
  let carousel = useRef(null);
  let btnId = useId();

  useEffect(() => {
    let instance = M.Carousel.init(carousel.current, {
      fullWidth: true,
      indicators: true,
      onCycleTo : function(elem, dragged){
        document.getElementById(btnId).href = MessengerLink(
          buildMessage(elem.attributes["data-name"].value)
        );
      }
    });

    const unmount = () => {
      if (!!instance) instance.destroy();
    };

    return unmount;
  }, []);

  // Build each carousel item
  let list = products.map((product) => {
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
        className="carousel carousel-slider product-image-wrapper carousel-wrapper"
        ref={carousel}
      >
        <div className="carousel-fixed-item center">
          <div className="right-align">
            <span className="price-label deep-orange darken-4 center-align">
              ${price}
            </span>
          </div>
        </div>
        {list}
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
          href={MessengerLink(buildMessage(products[0].name))}
        >
          <BsMessenger size={"12px"}></BsMessenger> &nbsp; Me interesa
        </a>
      </div>
    </>
  );
}
