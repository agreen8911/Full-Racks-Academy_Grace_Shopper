import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllUsers, deleteUser } from "./adminViewSlice";
import EditUser from "../editUser/EditUser";



const AllUsers = () => {
    const dispatch = useDispatch()

    const allUsers = useSelector((state) => {
        // console.log('allUsers****', state.allUsers.userList)
        return state.allUsers.userList
    })

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const usersDiv =
        allUsers ? (
            <div>
                 {
                    allUsers.map((user) => {
                        // console.log('user****', user)
                        return(
                            <div className="userContainer" key={user.id}>
                                <Link className="individualStudent" to={`/adminview/${user.id}`}>
                                    <h1 >{`${user.firstName} ${user.lastName}`}</h1>
                                </Link>
                                <button className="userDeleteBtn" onClick={()=>{
                                    dispatch(deleteUser(user.id))
                                }}>X</button>
                            </div>
                    )
                    })
                }
            </div>
        ) : (
            <div>No Users</div>
        ); 

    return (
        <div className='adminUserDiv'>
            {usersDiv}
        </div>
    );

    // return (
    //     <div>
    //         <div id="mainAdminDiv">

    //             <h1 id="allUsersHeader">All Users</h1>
            
    //             {
    //                 allUsers.map((user) => {
    //                     return(
    //                         <div className="userContainer" key={user.id}>
    //                             <h1 >{`${user.firstName} ${user.lastName}`}</h1>
    //                                 <button className="userDeleteBtn" onClick={()=>{
    //                                     dispatch(deleteUser(user.id))
    //                                 }}>X</button>
    //                         </div>
    //                     )
    //                 })
    //             }

    //         </div>
    //     </div>
    // )
}

export default AllUsers