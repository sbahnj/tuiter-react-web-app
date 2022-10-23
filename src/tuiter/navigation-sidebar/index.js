import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <div className="list-group-item">Tuiter</div>

            <div className="list-group-item">
                <Link to="/tuiter/home">Home</Link>
            </div>

            <div className="list-group-item">
                <Link to="/tuiter/explore">Explore</Link>
            </div>

            <div className="list-group-item">Notifications</div>

            <div className="list-group-item">Messages</div>

            <div className="list-group-item">Bookmarks</div>

            <div className="list-group-item">Lists</div>

            <div className="list-group-item">Profile</div>

            <div className="list-group-item">More</div>



        </div>
    );
};
export default NavigationSidebar;




