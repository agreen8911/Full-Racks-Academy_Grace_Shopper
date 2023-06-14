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
        <div>
            <div id="mainCardioDiv">

                <h1 id="allCardioHeader">Cardio Equipment</h1>
            
                {
                    allCardio.map((equipment) => {
                        return(
                                <div className="cardioContainer" key={equipment.id}>
                                    <Link className="individualEquipment" to={`/cardioequipment/${equipment.id}`}>
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