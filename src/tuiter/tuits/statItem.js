import React from "react";
const StatItem = (
    {
        tuit = {     "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">

                &#x1f4ac;&emsp;&emsp;&#8635;&emsp;&emsp;&#9825;&emsp;&emsp;&#10514;
                <div className="col-2">{tuit.replies}</div>
                <div className="col-2">{tuit.retuits}</div>
                <div className="col-2">{tuit.liked}</div>

            </div>
        </li>
    );
};
export default StatItem;
