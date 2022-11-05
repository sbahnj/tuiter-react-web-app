
import React from "react";

import todos from "./reducers/profile-reducer";
import Todos from "./profile-component";
import {Provider} from "react-redux";

import { configureStore }
    from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Profile</h2>
                <Todos/>

            </div>
        </Provider>
    );
};
export default ReduxExamples;

