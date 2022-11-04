import React, {useState} from "react";

import "../../index.css";

import WhoToFollowList from "../who-to-follow-list"

import {useDispatch, useSelector} from "react-redux";

import {addFirstName, addProfile}
    from "./profile-reducer";


const EditProfiles = () => {

    const editProfiles =
        useSelector(state => state.profile);

    const [editProfile, setProfile] = useState({do: ''});

    const [editFirstName, setFirstName] = useState({firstName: ''});


    const dispatch = useDispatch();


    const createFirstNameClickHandler = () => {
        dispatch(addFirstName(editFirstName))
    }


    const profileChangeHandler = (event) => {
        const profileValue = event.target.value;
        const newProfile = {
            do: profileValue
        };
        setProfile(newProfile);
    }

    const firstNameChangeHandler = (event) => {
        const firstNameValue = event.target.value;
        const newFirstName = {
            do: firstNameValue
        };
        setProfile(newFirstName);
    }

    return(
        <>
            <div className="row mt-2">


                <div className="col-10 col-lg-7 col-xl-6 ">


                    This is the Edit Profile

                    <input onChange={profileChangeHandler}
                           value={editProfile.do}
                           className="form-control w-75"/>


                    {editProfile.do}

                        </div>

                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-grey">

                    <WhoToFollowList/>

                </div>


            </div>
        </>
    );
};
export default EditProfiles;

