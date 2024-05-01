import { useParams } from "react-router-dom"
import DataBase from "../db/database";
import SubCategory from "../components/SubCategory";

export default function Categories(){

    let params = useParams();
    let category = DataBase.getCategoryByUrl(params.category);

    return (
      <>
        <div style={{ position: "relative" }}>
          <img src={"./img/" + category.img} style={{ width: "100%" }}></img>
          <h5 className="blue-text text-darken-4 img-title">
            {category.name}
          </h5>
        </div>
        <br></br>
        <br></br>
        <div className="container">
          {category.children.map((subCategory) => {
            return (
              <SubCategory
                key={subCategory.id}
                subCategory={subCategory}
                parentUrl={category.url}
                category={category.name}
              ></SubCategory>
            );
          })}
        </div>
        <br></br>
      </>
    );
}