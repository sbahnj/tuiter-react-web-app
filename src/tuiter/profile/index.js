
import React from "react";
import hello from "./hello";
import todos from "./profile-reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import { configureStore }
    from '@reduxjs/toolkit';
import Todos from "./todos-component";
import {Link} from "react-router-dom";
const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>




                <Todos/>

            </div>
        </Provider>
    );
};
export default ReduxExamples;

