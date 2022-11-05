import React from "react";

import todos, {addTodo} from "./reducers/profile-reducer";
import Todos from "./profile-component";
import {Provider} from "react-redux";

import { configureStore }
    from '@reduxjs/toolkit';
import {Link} from "react-router-dom";


const store = configureStore({
    reducer: {todos}
});

const EditProfile = () => {




    return(
        <Provider store={store}>
            <div>
                <h2>Edit Profile</h2>




                <Todos/>

            </div>
        </Provider>
    );
};
export default EditProfile;

