import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchSingleProduct, selectSingleProduct, fetchCart, addToCartProducts } from './SingleProductSlice';
import { selectUser } from '../auth/authSlice';



const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector( selectSingleProduct );
  const user = useSelector(selectUser)
 
  const priceFunction = () => {
    return singleProduct.price / 100
  }
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch] );

  const handleAddToCart = (productId) => {
    if(!user.me.id) return "not logged in"
    dispatch(fetchCart(user.me.id)).then((res)=>{
      const cartId = res.payload.id;
      dispatch(addToCartProducts({cartId, productId, quantity: 1, unitPrice: singleProduct.price}))
    } )
  }

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
            <div>
              <button onClick={() => handleAddToCart(singleProduct.id)}>Add to Cart </button>
            </div>
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
