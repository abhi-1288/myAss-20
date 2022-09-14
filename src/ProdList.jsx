import React from 'react';
import Product from './Product'


function ProdList({ products }){

  //destructring object = {}  <== putting value in this bracket
  
  return(
    <div className="flex flex-wrap justify-center gap-2  md:ml-auto -ml-7">

      {products.map(function(item){
        return(
          <div className="flex md:flex-row flex-col justify-center">
        <Product
          key={item.title}
          title={item.title}
          category={item.category}
          imgUrl={item.imgUrl}
          price={item.price}
          {...item}
          />
          </div>
        );
      })}
    </div>
  );
}
export default ProdList;







          

          

   







  