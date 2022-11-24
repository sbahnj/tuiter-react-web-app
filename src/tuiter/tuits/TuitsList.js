
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"

//import TuitItem from "./TuitItem";
import {deleteTuitThunk, findTuitsThunk}
    from "../../services/tuits-thunks";





const TuitsList = () => {



    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));}




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
                        <li>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            {tuit.tuit}
                            <p></p>
                            {tuit.likes}
                        </li>
                    )
                }






            </li>



        </ol>




    );
};
export default TuitsList;

