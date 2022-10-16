import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import ProdList from './ProdList'
import NoMatch from './NoMatch'
import { getProductList } from './api'
import Loading from './Loading'
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import {range} from 'lodash'

function ProductListPage({user}) {

  const [productList, setProductList] = useState()
  const [loading, setLoading] = useState(true)
  // const [sort, setSort] = useState("default")
  // const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams])

  let {query, sort, page} = params

  page = page || 1;
  sort = sort || "default";
  query = query || "";

  useEffect (function() {
    
    let sortBy;
    let sortType;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "lowToHigh") {
      sortBy = "price";
    } else if (sort == "highToLow") {
      sortBy = "price";
      sortType = "desc";
    }


    getProductList(sortBy, query, page, sortType).then(function(response){ 
      setProductList(response)
      setLoading(false)
    }) 


  }, [ sort, query, page ])



  function handleSearch(event) {
    setSearchParams({...params, query: event.target.value, page:1},{replace: false})
  }

  function handleSort(event) {
    setSearchParams({...params, sort: event.target.value},{replace: false})
  }

if(loading){
  return <Loading />
}

  return (
    <div className="">

      <div className="bg-white flex justify-center items-center rounded-md border-2 mx-2 border-slate-800 h-fit">
        <img src="https://img.icons8.com/ios-glyphs/452/search--v1.png" className="w-8 h-fit" />
        <input className="border-white rounded-md dark:text-gray-800 p-2 w-screen" placeholder="SEARCH" type="text" onChange={handleSearch} value={query} />
      </div>

      <div className="flex m-2 md:justify-end">


        <select value={sort} onChange={handleSort} className="h-fit w-fit dark:text-gray-800 border-2 rounded border-emerald-500 m-1 ">
          <option value="default">Default Sort</option>
          <option value="title">Sort by Title</option>
          <option value="lowToHigh">Sort by Price: Low to High</option>
          <option value="highToLow">Sort By Price: High to Low</option>
        </select>
      </div>



    {productList.data.length > 0 &&  <ProdList products={productList.data} /> }
    {productList.data.length == 0 && <NoMatch /> }

    <div className='flex justify-center my-4 space-x-3 items-center '>
       {range(1, productList.meta.last_page + 1).map((pageNumber) => {
          return (
            <Link key={pageNumber}
             to={"?" + new URLSearchParams({...params, page: pageNumber})}
             className={'text-red-400 border-2 border-sky-500 w-8 h-8 items-center flex justify-center rounded-md text-2xl' + (pageNumber == page  ? "bg-red-400 text-sky-500 text-2xl animate-bounce" : "" )}> {pageNumber} </Link>
          )
       })}
      </div>


    </div>

  )
  

}

export default ProductListPage