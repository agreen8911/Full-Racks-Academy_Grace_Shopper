import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllStrength } from "./allStrengthSlice";

const AllStrength = () => {
    const dispatch = useDispatch()

    const allStrength = useSelector((state) => {
        return state.allStrength.strengthList
    })

    useEffect(() => {
        dispatch(fetchAllStrength())
    }, [])

    return (
        <div className="allProducts-main">
            <h1>Strength Equipment</h1>

            <div className="allProducts-container">

                {
                    allStrength.map((equipment) => {
                        return(
                                <div className="productCard"key={equipment.id}>
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

export default AllStrength