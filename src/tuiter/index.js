
import NavigationSidebar
    from "./navigation-sidebar";
import ExploreComponent from "./explore"
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ReduxExamples from "./profile";
import ProfileComponent from "./profile/profile-component";

import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import statsReducer from "./tuits/stats-reducer";
import profileReducer from "./profile/reducers/profile-reducer";


import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import EditProfile from "./profile/editProfile";






const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, tuitStats: statsReducer, profile: profileReducer}});


function Tuiter() {
    return (



        <Provider store={store}>


        <div className="row mt-2">

        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="explore"/>
        </div>


        <div className="col-10 col-md-10 col-lg-7 col-xl-10"
             style={{"position": "relative"}}>

            <Routes>
                <Route path="home"    element={<HomeComponent/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
                <Route path="profile" element={<ReduxExamples/>}/>
                <Route path="editProfile" element={<EditProfile/>}/>


            </Routes>



        </div>





    </div>

        </Provider>
)
}

export default Tuiter






