import axios from "axios";

export function getProductData(id){
  return axios.get("https://myeasykart.codeyogi.io/products/" + id)
  .then(function(response){                                                
      return response.data ;
} );
}

export function getProductList(sortBy, search, page, sortType){

  let params = {}
  if(sortBy){
    params.sortBy = sortBy
  }
  if(search){
    params.search = search
  }
  if(page){
    params.page = page
  }
  if(sortType){
    params.sortType = sortType 
  }

  return axios
  .get("https://myeasykart.codeyogi.io/products", {
    params,
  }) 
  .then(function (response){
    return response.data;
  });
 }
