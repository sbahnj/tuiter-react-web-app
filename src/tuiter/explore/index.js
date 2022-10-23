import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import WhoToFollowList from "../who-to-follow-list"
import ExploreImage from "../explore image";




const ExploreComponent = () => {
    return(
        <>
            <div className="row mt-2">
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>


            <ul className="nav nav-pills nav-fill mb-2">
                <li className="nav-item">

                    <button className="btn btn-primary rounded-pill float-end">For You</button>


                </li>
                <li className="nav-item">
                    Trending

                </li>
                <li className="nav-item">
                    News

                </li>
            </ul>





            <div className="col-10 col-lg-7 col-xl-6 ">



                <ExploreImage/>
                <PostSummaryList/>

            </div>



            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-grey">

                <WhoToFollowList/>


            </div>
        </div>
        </>
    );
};
export default ExploreComponent;

