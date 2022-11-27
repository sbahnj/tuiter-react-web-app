
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

    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked : true
        }));}


    const dislikeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes - 1,
            liked : false
        }));}




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



                                {tuit.liked && <i onClick={() => dislikeTuitHandler(tuit)} className="bi bi-heart-fill text-danger"></i> }
                                {!tuit.liked && <i onClick={() => likeTuitHandler(tuit)} className="bi bi-heart"></i> }




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

