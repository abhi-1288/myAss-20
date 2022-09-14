import axios from 'axios'

export function getProductData(id){
 return  axios.get("https://dummyjson.com/products/" + id)
}

export function getProductList(){
  return axios.get("https://dummyjson.com/products/") //then(function(products){
  //   return products.data.products
  // })
}

// export default { getProductData, getProductList }

// export const fakestore = async()=>{
//   const response=await fetch("https://fakestoreapi.com/products")
//   // return axios.get("https://fakestoreapi.com/products")
//   console.log(response)
//   const jsonData=await response.json
//   console.log(jsonData)
// }