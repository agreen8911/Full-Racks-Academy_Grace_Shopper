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
        <div className="allProducts-main">
          <h1>All Products</h1>

          <div className="allProducts-container">
        
            {
              allProducts.map((product) => {
                return (
                  <div className="productCard" key={product.id} >
                    <Link to={`/singleproduct/${product.id}`}>
                      <h1>{product.productName}</h1>
                    </Link>
                    <p>
                    Price: ${product.price/100}
                    </p>
                    <p>{product.description}</p>
                    <img src={product.imageUrl}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
}

export default AllProducts