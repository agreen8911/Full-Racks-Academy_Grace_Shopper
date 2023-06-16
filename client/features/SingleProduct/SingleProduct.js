import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct, selectSingleProduct } from './SingleProductSlice';

const SingleProduct = () => {
  const { id } = useParams();
  console.log('Product ID:', id); 
  const dispatch = useDispatch();
  const singleProduct = useSelector( selectSingleProduct );
  console.log("SINGLE PRODUCT",singleProduct);
  const priceFunction = () => {
    return singleProduct.price / 100
  }
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch] );

  const handleAddToCart = (productId) => {
    if(!user.me.id) return "not logged in"
  }
  
  // const singleProduct = useSelector((state) => {
  //       return state.singleProduct.singleProduct;
  //   });
  
  if (!singleProduct) {
    // Handle the case when the product data is still being fetched
    return <div>Loading...</div>;
  }
  const singleProductDiv =
        singleProduct && singleProduct.id ? (
            <div className="singleProductWrapper">
                <h1 className="singleViewNameHeader">
          <p>
            {singleProduct.productName}
          </p>
          
          <p>
            {singleProduct.description}
          </p>       
          
          Price: ${priceFunction( singleProduct.price )}
          
          
          
                </h1>
              <img src={singleProduct.imageUrl} alt={singleProduct.productName} />
              <button>Add to Cart </button>
            </div>
        ) : (
            <div>No SingleProduct</div>
        ); 



  return (
    <div className='SingleProduct'>
      {singleProductDiv}
    </div>
  );
};

export default SingleProduct;
