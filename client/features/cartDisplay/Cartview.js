import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCartView, selectCart } from "./CartViewSlice";
import { selectUser } from "../auth/authSlice";





const CartView = () => {
    const dispatch = useDispatch();
    const user = useSelector( selectUser );
    const cartDisplay = useSelector( ( state ) => {
        console.log("THIS IS CART DISPLAY", state.cartDisplay);
        return state.cartDisplay;
    })

    useEffect( () => {
        console.log( 'THIS IS USER', user );
        if ( user.me.id ) {
            dispatch(fetchAllCartView(user.me.id))
            
        }
    },[dispatch])

    return (
        <div>
          {cartDisplay.cartList.map((cartItem) => (
            <div key={cartItem.id}>
              <div>
                {cartItem.cart_products.map((product) => (
                  <div key={product.createdAt}>
                    <div key={product.productId}>Product ID:{product.productId}</div>
                    <div key={product.unitPrice}>Unit Price:{product.unitPrice}</div>
                    <div key={product.quantity}>Quantity:{product.quantity}</div> 
                  </div>
                ))}
              </div>
            </div>
          ))}

          {

          }  
        </div>
      );

    // return (
    //     <div id="mainCartViewDiv">
    //             <h1>Check out</h1>
    //             <h1 id="allCartViewHeader">Cart</h1>
                
    //             {/* {
    //                 cartDisplay.cartList.map( ( cartItem ) => {
    //                     console.log('cartt', cartItem)
    //                     {cartItem.cart_products.map((product) => {
    //                         console.log('this is product!', product.unitPrice)
    //                         return (
    //                             <div className="cart-view">
    //                                 <p>
    //                                 {product.unitPrice}
    //                                 </p>
    //                                 <p>
    //                                     Hi!
    //                                 </p>

    //                             </div>
    //                         )
    //                         })
    //                     }
    //                 })
    //             } */}
             
    //     </div>
                  
                        
      
    // )
}

export default CartView;