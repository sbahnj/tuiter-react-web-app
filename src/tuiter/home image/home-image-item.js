import React from "react";
const HomeImageItem = (
    {
        post = {
            "topic": "test",
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
                    <img className="rounded-circle" height={48} src={`/images/${post.image}`} alt={"who to follow"}/>
                </div>

                <div>&#64;{post.userName}  {post.time}</div>
                <div className="fw-bolder">{post.topic}</div>
                <div>{post.title}</div>

                <div className="col-12">
                    <div><img width={500} className="float-end rounded-3" src={`/images/${post.image}`} alt={"full post"}/></div>



                </div>

            </div>
        </li>
    );
};
export default HomeImageItem;

