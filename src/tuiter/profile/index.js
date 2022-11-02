
import React from "react";
import HelloReduxExampleComponent
    from "./hello-redux-example-component";
import hello from "./hello";
import todos from "./profile-reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import { configureStore }
    from '@reduxjs/toolkit';
import Todos from "./todos-component";
const store = configureStore({
    reducer: {hello, todos}
});

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Edit Profile</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;

