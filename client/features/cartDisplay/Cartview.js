import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllCartView, selectCart, updateCart } from "./CartViewSlice";
import { selectUser } from "../auth/authSlice";

const CartView = () => {
    const dispatch = useDispatch();
    const user = useSelector( selectUser );
    const cartDisplay = useSelector( ( state ) => {
        // console.log("THIS IS CART DISPLAY", state.cartDisplay);
        return state.cartDisplay;
    })
    const navigate = useNavigate()


    useEffect( () => {
        console.log( 'THIS IS USER', user );
        if ( user.me.id ) {
            dispatch(fetchAllCartView(user.me.id))
        }
    },[dispatch])

  const handlePlaceOrder = () =>{
    console.log('THIs is user inside place order', user.me.id)
    // dispatch(
		// 	updateCart(user.me.id)
		// )
    // console.log('THIs is updateCart', updateCart(user.me.id))

    window.confirm("Order Placed!")
    navigate("/home")
  }

  function convertToDollars(price) {
    const dollars = price/100;
    return dollars;
  }

  function findTotal(quantity, unitPrice){
    const total = quantity * convertToDollars(unitPrice)
    return `$${total}`;
  }

    return (
        <div className="primaryCartWrapper">
          <h1>Checkout Summary</h1>
          {cartDisplay.cartList.map((cartItem) => (
            <div className="cartItem-wrapper" key={cartItem.id}>
            <div className="cartProduct-Wrapper">
              <table className="cartProduct-table">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItem.cart_products.map((product) => (
                      <tr key={product.createdAt}>
                        <td>{product.productId}</td>
                        <td>{product.quantity}</td>
                        <td>Price: {findTotal(product.quantity, product.unitPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={() => handlePlaceOrder()}>Checkout!</button>
            </div>
          ))}
        </div>
      );

}

export default CartView;