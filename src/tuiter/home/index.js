import React from "react";
import "../../index.css";
import FullPostList from "../full-post-list";
import HomeImage from "../home image";
import WhoToFollowList from "../who-to-follow-list"
import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";




const HomeComponent = () => {
    return(
        <>
            <div className="row mt-2">


                <div className="col-10 col-lg-7 col-xl-6 ">


                    <WhatsHappening/>
                    <TuitsList/>

                </div>

                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-grey">

                    <WhoToFollowList/>

                </div>




            </div>
        </>
    );
};
export default HomeComponent;

