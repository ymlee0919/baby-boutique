import { RootURL } from "../App";

const DataBase = {

    info : null,

    init : function(onLoaded){
        let me = this;
        fetch(RootURL + 'data/info.json')
        .then(response => response.json())
        .then((data) => {
            me.info = data;
            onLoaded();
        })
    },

    getCategories: function(){
        return this.info['categories'];
    },

    getCategoryByUrl: function(url){
        return this.info['categories'].find( (category) => {return category.url === url})
    },

    getSubCategoryByUrl: function(categoryUrl, subCategoryUrl){ 
        let category = this.getCategoryByUrl(categoryUrl);
        return category.children.find((subCategory) => {return subCategory.url === subCategoryUrl});
    },

    findSubCategoryId: function(categoryUrl, subCategoryUrl){
        return this.info['categories'].find( (category) => {return category.url === categoryUrl})
        .children.find((subCategory) => {return subCategory.url === subCategoryUrl}).id;
    },

    findProducts: function(subCategoryId){
        return this.info['products'].filter( (product) => {
            return product.category == subCategoryId
        } );
    }
}


export default DataBase;