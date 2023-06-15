import React, {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProductsAsync, selectAllProducts } from "./allProductsSlice";
import { Link } from "react-router-dom"


const AllProducts = () => {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => {
        return state.allProducts.productList
    })
  

    useEffect(() => {
       dispatch(fetchAllProductsAsync())
    }, [dispatch])

    return (
        <div>
          <h1>All Products</h1>
      
          {
            allProducts.map((product) => {
              return (
                <div key={product.id} >
                  <Link to={`/singleproduct/${product.id}`}>
                    <h1>{product.productName}</h1>
                  </Link>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                  <img src={product.imageUrl}/>
                </div>
              )
            })
          }
        </div>
      )
}

export default AllProducts