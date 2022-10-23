import React from "react";
const ExploreImageItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "../../images/spaceX.jpeg"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">

                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt={"explore"}/>
                </div>
            </div>
        </li>
    );
};
export default ExploreImageItem;

