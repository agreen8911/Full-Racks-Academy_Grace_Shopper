import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCartView, selectCart } from "./CartViewSlice";
import { selectUser } from "../auth/authSlice";
const CartView = () => {
    const dispatch = useDispatch();
    // const cartDisplay = useSelector( selectCart );
    // console.log("THIS IS cartdisplay", cartDisplay);
    const user = useSelector( selectUser );
    const cartDisplay = useSelector( ( state ) => {
        
        console.log("THIS IS CART DISPLAY", state.cartDisplay);
        return state.cartList;
    })

    useEffect( () => {
        console.log( 'THIS IS USER', user );
        if ( user.me.id ) {
            dispatch(fetchAllCartView(user.me.id))
            
        }
    },[dispatch])

    return (
       
        
        <div id="mainCartViewDiv">
                <h1>Check out</h1>
                <h1 id="allCartViewHeader">Cart</h1>

                {cartDisplay ? cartDisplay.map( ( cartItem ) => {
                    console.log("THIS IS CART ITEM", cartItem);
                    return (
                        <div key={cartItem.id}>
                            <h1>{cartItem.productName}</h1>  
                    </div>
                    )
                } ):"noCartItems" }
                   
                    

                
            
                {/* {
                    cartView.map((allProducts) => {
                        return(
                                <div className="cartViewContainer" key={allProducts.id}>
                                    <Link className="cartList" to={`/singleproduct/${allProducts.id}`}>
                                        <h1 >{`${equipment.productName}`}</h1>
                                    </Link>
                                </div>
                        )
                    })
                } */}

        </div>
                        
      
    )
}

export default CartView;