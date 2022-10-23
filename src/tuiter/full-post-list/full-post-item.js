import React from "react";
const FullPostItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">

                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${post.image}`} alt={"who to follow"}/>
                </div>

                <div className="col-10">
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>


                &#x1f4ac;&emsp;&emsp;&#8635;&emsp;&emsp;&#9825;&emsp;&emsp;&#10514;



            </div>
        </li>
    );
};
export default FullPostItem;

