import React from "react";
import {useSelector} from "react-redux";
import TuitItem
    from "./TuitItem";



const TuitsList = () => {

    const tuitsArray = useSelector(state => state.tuits)



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

