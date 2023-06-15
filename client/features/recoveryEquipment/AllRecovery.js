import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllRecovery } from "./allRecoverySlice";

const AllRecovery = () => {
    const dispatch = useDispatch()

    const allRecovery = useSelector((state) => {
        return state.allRecovery.recoveryList
    })

    useEffect(() => {
        dispatch(fetchAllRecovery())
    }, [])

    return (
        <div>
            <div id="mainRecoveryDiv">

                <h1 id="allRecoveryHeader">Recovery Equipment</h1>
            
                {
                    allRecovery.map((equipment) => {
                        return(
                                <div className="recoveryContainer" key={equipment.id}>
                                    <Link className="individualEquipment" to={`/singleproduct/${equipment.id}`}>
                                        <h1 >{`${equipment.productName}`}</h1>
                                    </Link>
                                </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AllRecovery