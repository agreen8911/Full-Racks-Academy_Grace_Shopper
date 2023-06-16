import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct, selectSingleProduct } from './SingleProductSlice';
// import { selectUser } from '../editUser/singleUserSlice'

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector( selectSingleProduct );
  // const user = selectUser(selectUser)
  // console.log('selectUser', user)

  const priceFunction = () => {
    return singleProduct.price / 100
  }
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch] );
  
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
