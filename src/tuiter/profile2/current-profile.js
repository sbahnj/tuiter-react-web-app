import React from "react";


const CurrentProfile = (
    {
        initialProfile = {"firstName": 'Jose', lastName: 'Annunziato', handle: '@jannunzi',
        profilePicture: 'jose.png', 	bannerPicture: 'polyglot.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
        website: 'youtube.com/webdevtv',
    location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
    followingCount: 340,	followersCount: 223}
}




) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">


                </div>

                <div className="col-8">


                    {initialProfile.firstName}
                    {initialProfile.lastName}
                    {initialProfile.handle}
                </div>

            </div>
        </li>
    );
};
export default CurrentProfile;