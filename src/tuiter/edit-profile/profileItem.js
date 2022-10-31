import React from "react";
const profileItem = (
    {
        profile = { "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
            "profilePicture": "unicorn-clipart-6.jpg", 	"bannerPicture": "banner_grass.png",
            "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast.",
            "website": "youtube.com/webdevtv",
            "location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
            "followingCount": 340,	"followersCount": 223    }
    }
) => {
    return(
        <li className="list-group-item">

            <img className="fa-rectangle-ad" height={200} src={`/images/${profile.bannerPicture}`} alt={"banner"}/>


            <img className="rounded-circle" height={48} src={`/images/${profile.profilePicture}`} alt={"profile"}/>


            <div className="row">

                <div className="col-7">{profile.bio}</div>

            </div>

            <div className="row">

                <div className="col-7">{profile.location} Born {profile.dateOfBirth} Joined {profile.dateJoined}</div>

            </div>

        </li>
    );
};
export default profileItem;
