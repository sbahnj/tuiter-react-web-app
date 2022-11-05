
import React from "react";

import todos, {addTodo} from "./reducers/profile-reducer";
import Todos from "./profile-component";
import {Provider} from "react-redux";

import { configureStore }
    from '@reduxjs/toolkit';
import {Link} from "react-router-dom";
import WhoToFollowList from "../who-to-follow-list";


const store = configureStore({
    reducer: {todos}
});

const ReduxExamples = () => {


    function gotoEditMode() {

        document.getElementById("editProfile button").style.display = "none"
        document.getElementById("Save button").style.display = "block"
        document.getElementById("input line").style.display = "block"
        document.getElementById("Profile heading").style.display = "none"
        console.log("edit mode found")

    }

    return(
        <Provider store={store}>

            <img width={500} className=" rounded-3" src ="../../banner_grass.png" alt={"profile main"}/>
            <div className="col-10 col-lg-7 col-xl-6">




                <h2 id="Profile heading" >Profile</h2>


                <button id="editProfile button" onClick={gotoEditMode}
                        className="btn btn-primary rounded-pill float-end">Edit Profile</button>



                <Todos/>

            </div>



        </Provider>
    );
};
export default ReduxExamples;

