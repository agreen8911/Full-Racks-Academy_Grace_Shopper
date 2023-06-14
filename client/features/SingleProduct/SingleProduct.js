import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSingleProduct} from '../reducers/AllSingleProduct';

const SingleProduct = ({ SingleProduct }) => {
  const dispatch = useDispatch();

  

  return (
    <div className='SingleProduct'>
      <h3>
        
        <Link to={`/singleproduct/${SingleProduct.id}`}>
          {singleProduct.productName} {singleProduct.description}
        </Link>
      </h3>
      <img src={singleProduct.imageUrl} alt={singleProduct.productName} />
 
    </div>
  );
};

export default SingleProduct;
