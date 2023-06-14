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
        <div>
            <div id="mainStrengthDiv">

                <h1 id="allStrengthHeader">Strength Equipment</h1>
            
                {
                    allStrength.map((equipment) => {
                        return(
                                <div className="equipmentContainer" key={equipment.id}>
                                    <Link className="individualEquipment" to={`/strengthequipment/${equipment.id}`}>
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