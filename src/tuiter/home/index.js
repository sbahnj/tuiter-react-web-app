import React from "react";
import PostSummaryList from "../post-summary-list";
import "../../index.css";
import FullPostList from "../full-post-list";




const HomeComponent = () => {
    return(
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2 bg-black">






                </div>
                <div className="col-10 col-lg-7 col-xl-6 bg-black">
                    <FullPostList/>





                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-grey">

                    <PostSummaryList/>





                </div>
            </div>
        </>
    );
};
export default HomeComponent;

