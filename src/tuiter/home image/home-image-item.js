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
                <div className="col-12">
                    <div><img width={300} className="float-end rounded-3" src={`/images/${post.image}`} alt={"full post"}/></div>
                    <div>{post.userName}  {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>

            </div>
        </li>
    );
};
export default HomeImageItem;

