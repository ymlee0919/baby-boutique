import INFO from './info.js'

const DataBase = {
    info : INFO,

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