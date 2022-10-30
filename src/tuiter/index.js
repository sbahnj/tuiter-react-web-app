
import NavigationSidebar
    from "./navigation-sidebar";
import ExploreComponent from "./explore"
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import statsReducer from "./tuits/stats-reducer";

import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import TuitsList from "./tuits/TuitsList";
import WhoToFollowList from "./who-to-follow-list";


const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, tuitStats: statsReducer}});


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
                <Route path="home"    element={<TuitsList/>}/>
                <Route path="explore" element={<ExploreComponent/>}/>
            </Routes>



        </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-grey">

                <WhoToFollowList/>

            </div>



    </div>

        </Provider>
)
}

export default Tuiter






