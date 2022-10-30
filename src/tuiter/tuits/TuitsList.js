import React from "react";
import {useSelector} from "react-redux";
import TuitItem
    from "./TuitItem";
import StatItem from "./statItem";


const TuitsList = () => {

    const tuitsArray = useSelector(state => state.tuits)
    const statsArray = useSelector(state => state.tuitStats)


    return(



        <ol className="list-group">

            <li>


            {
                tuitsArray.map(tuits =>
                    <TuitItem
                        key={tuits._id}
                        post={tuits}/> )


            }


            </li>



        </ol>




    );
};
export default TuitsList;

