import React, { useState, useEffect } from 'react'
import ProdList from './ProdList'
import NoMatch from './NoMatch'
import { getProductList } from './api'
import Loading from './Loading'

function ProductListPage() {

  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState(true)
  const [sort, setSort] = useState("default")
  const [querry, setQuerry] = useState("");

  useEffect (function(){
    const xyz  = getProductList()

    xyz.then(function(response){ 
      setProductList(response)
      setLoading(false)
    }) 
  }, [])

  // let data = allData;
  // const [data, setData] = useState(allData)

  let data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase()
    const lowerCaseQuerry = querry.toLowerCase()

    return lowerCaseTitle.indexOf(lowerCaseQuerry) != -1
  })

  if (sort === 'lowToHigh') {
    data.sort(function(x, y) {
      return x.price - y.price
    })
  }
  else if (sort == "title") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1
    })
  }
  else if (sort == "highToLow") {
    data.sort(function(x, y) {
      return y.price - x.price
    })
  }


  function handleSearch(event) {
    setQuerry(event.target.value)
    console.log("new data", data)

  }

  function handleSort(event) {
    setSort(event.target.value)
    console.log("sorting", event.target.value)
  }

if(loading){
  return <Loading />
}



// fakestore();
  return (
    <div className="">

      <div className="bg-white flex justify-center rounded-md border-2 mx-2 border-slate-800 h-fit">
        <img src="https://img.icons8.com/ios-glyphs/452/search--v1.png" className="w-8 h-fit" />
        <input className="border-white rounded-md w-screen" placeholder="SEARCH" type="text" onChange={handleSearch} value={querry} />
      </div>

      <div className="flex m-2 md:justify-end">


        <select value={sort} onChange={handleSort} className="h-fit w-fit border-2 rounded border-emerald-500 m-1 ">
          <option value="default">Default Sort</option>
          <option value="title">Sort by Title</option>
          <option value="lowToHigh">Sort by Price: Low to High</option>
          <option value="highToLow">Sort By Price: High to Low</option>
        </select>
      </div>



    {data.length > 0 && <ProdList products={data} /> }
    {data.length == 0 && <NoMatch /> }
    {}
    </div>

  )
  

}

export default ProductListPage