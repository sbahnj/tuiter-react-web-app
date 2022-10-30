import WhatsHappening from "./whats-happening";
import TuitsList from "../tuits/TuitsList";




const ProfileComponent = () => {
    return(
        <>
            <div className="row mt-2">


                <div className="col-10 col-lg-7 col-xl-6 ">

                    Profile Component


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
export default ProfileComponent;

