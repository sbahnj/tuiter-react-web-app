import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <div className="list-group-item">Tuiter</div>

            <div className="list-group-item">Home</div>

            <div className="list-group-item">Explore</div>

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




