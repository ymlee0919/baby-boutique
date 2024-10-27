import { useParams } from "react-router-dom"
import DataBase from "../db/database";
import SubCategory from "../components/SubCategory";
import { RootURL } from "../App";
import HeaderImg from "../components/HeaderImg";

export default function Categories(){

    let params = useParams();
    let category = DataBase.getCategoryByUrl(params.category);
    

    return (
      <>
      <HeaderImg src={RootURL + "img/" + category.img} title={category.name}></HeaderImg>
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