import axios from 'axios'

export function getProductData(id){
 return  axios.get("https://dummyjson.com/products/" + id)
}

export function getProductList(){
  return axios.get("https://dummyjson.com/products/")
}


// export function getProductData(id){
//   return  axios.get("https://fakestoreapi.com/products" + id)
//  }
 
//  export function getProductList(){
//    return axios.get("https://fakestoreapi.com/products")
//  }
//  console.log(getProductList)