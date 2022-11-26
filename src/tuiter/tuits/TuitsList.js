
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"

//import TuitItem from "./TuitItem";
import {deleteTuitThunk, findTuitsThunk, updateTuitThunk}
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



        <ul  className="list-group">

            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            <li >

                {
                    tuits.map((tuit) =>
                        <li className="list-group-item">
                            <img className="rounded-circle" height={48} src={`/images/spaceX_logo.jpg`} alt={"tuit"}/>
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(tuit._id)}></i>
                            {tuit.tuit}



                            <div>
                                Likes: {tuit.likes}



                                <i  onClick={() => dispatch(updateTuitThunk({
                                    ...tuit,
                                    likes: tuit.likes + 1
                                }))} className="bi bi-heart-fill me-2 text-danger" ></i>

                                &emsp;&#x1f4ac;&emsp;&emsp;&#8635;&emsp;&emsp;&#10514;

                            </div>



                        </li>
                    )
                }






            </li>



        </ul>




    );
};
export default TuitsList;

