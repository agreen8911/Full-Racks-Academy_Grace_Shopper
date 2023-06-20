import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { fetchAllUsers, deleteUser } from "./adminViewSlice";
import { fetchAllProductsAsync, selectAllProducts } from "../allProducts/allProductsSlice";
import { useNavigate } from "react-router-dom";



const AllUsers = () => {
    const dispatch = useDispatch()

    const allUsers = useSelector((state) => {
        return state.allUsers.userList
    })

    const allProducts = useSelector((state) => {
        return state.allProducts.productList
    })
    const navigate = useNavigate();
  
    useEffect(() => {
       dispatch(fetchAllProductsAsync())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const usersDiv =
        allUsers && allProducts ? (
            <div>
                <h1 id="allUsersHeader">All Users</h1>
                    <div>
                    {
                        allUsers.map((user) => {
                            return(
                                <div className="userContainer" key={user.id}>
                                   
                                    <Link className="individualUser" to={`/adminview/${user.id}`}>
                                        <h1 >{`${user.firstName} ${user.lastName}`}</h1>
                                    </Link>
                                    <button className="userDeleteBtn" onClick={()=>{
                                        dispatch(deleteUser(user.id))
                                        fetchAllProductsAsync()
                                    }}>X</button>
                                    <button className="userEditBtn" onClick={()=>{
                                        navigate(`/adminview/${user.id}`)
                                    }}>Edit User</button>
                                </div>
                        )
                        })
                    }
                    <div>
                        <h1>All Products</h1>
        
                            {
                                allProducts.map((product) => {
                                return (
                                    <div key={product.id} >
                                    <Link to={`/singleproduct/${product.id}`}>
                                        <h1>{product.productName}</h1>
                                    </Link>
                                    <button className="productEditBtn" onClick={()=>{
                                        navigate(`/adminviewproduct/${product.id}`)
                                    }}>Edit or Delete Product</button>
                                    </div>
                                )
                                })
                            }
                    </div>
                </div>
            </div>
        ) : (
            <div>No Users</div>
        ); 

    return (
        <div className='adminUserDiv'>
            {usersDiv}
        </div>
    );
}

export default AllUsers