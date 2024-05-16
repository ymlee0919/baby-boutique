import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataBase from "../db/database";
import Set from "./Set";
import Single from "./Single";


export default function Products() {
  // Load data
    let params = useParams();

    let category = DataBase.getCategoryByUrl(params.category);
    
    let subCategory = DataBase.getSubCategoryByUrl(
      params.category,
      params.item
    );

    if(typeof(subCategory.items) == 'undefined')
      return <Single category={category} subCategory={subCategory}></Single>
    else
      return <Set category={category} subCategory={subCategory}></Set>
}