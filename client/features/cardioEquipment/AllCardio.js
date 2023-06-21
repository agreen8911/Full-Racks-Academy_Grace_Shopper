import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllCardio } from "./allCardioSlice";

const AllCardio = () => {
    const dispatch = useDispatch()

    const allCardio = useSelector((state) => {
        return state.allCardio.cardioList
    })

    useEffect(() => {
        dispatch(fetchAllCardio())
    }, [])

    return (
        <div className="allProducts-main">
            <h1>All Cardio Equipment</h1>

            <div className="allProducts-container">

                {
                    allCardio.map((equipment) => {
                        return(
                                <div className="productCard" key={equipment.id}>
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

export default AllCardio