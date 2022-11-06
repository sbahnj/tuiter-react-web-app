
import React from "react";

import todos, {addTodo} from "./reducers/profile-reducer";
import Todos from "./profile-component";
import {Provider} from "react-redux";

import { configureStore }
    from '@reduxjs/toolkit';




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

            <i id={"close-x"} className="bi bi-x-lg float-end" ></i>

            <img className="fa-rectangle-ad float-left" height={250} src={`/images/banner_grass.png`} alt={"who to follow"}/>
            <img className="rounded-circle float-left" height={48} src={`/images/unicorn-clipart-6.jpg`} alt={"who to follow"}/>
            <div className="col-10 col-lg-7 col-xl-6">




                <h2 id={"Profile heading"} >Profile</h2>


                <button id="editProfile button" onClick={gotoEditMode}
                        className="btn btn-primary rounded-pill float-end">Edit Profile</button>



                <Todos/>

            </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-grey">



            </div>







        </Provider>
    );
};
export default ReduxExamples;

