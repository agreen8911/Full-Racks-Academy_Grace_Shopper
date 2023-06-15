import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct, selectSingleProduct } from './SingleProductSlice';

const SingleProduct = () => {
  const { id } = useParams();
  console.log('Product ID:', id); 
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectSingleProduct);

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
        singleProduct && singleProduct.product ? (
            <div className="singleProductWrapper">
                <h1 className="singleViewNameHeader">
                    {singleProduct
                        ? `${singleProduct.productName} ${singleProduct.description}`
                        : "no singleproduct"}
                </h1>
             
            </div>
        ) : (
            <div>No SingleProduct</div>
        );



  return (
    <div className='SingleProduct'>
      <h3>
        <Link to={`/singleproduct/${id}`}>
          {singleProduct.productName} {singleProduct.description}
        </Link>
      </h3>
      <img src={singleProduct.imageUrl} alt={singleProduct.productName} />
    </div>
  );
};

export default SingleProduct;
