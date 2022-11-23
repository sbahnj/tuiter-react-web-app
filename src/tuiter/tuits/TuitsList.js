
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"

import TuitItem from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";





const TuitsList = () => {



    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return(



        <ol className="list-group">

            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            <li>
                {
                    tuits.map((tuit) =>
                        <li>{tuit.tuit}</li>
                    )
                }






            </li>



        </ol>




    );
};
export default TuitsList;

