
import {createTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";
import React, {useState} from "react";


const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        dispatch(createTuit(newTuit));
    }



    return (
        <div className="row">
            <div className="col-auto">
                <img className="rounded-circle" height={48} src={`/images/unicorn-clipart-6.jpg`} alt={"who to follow"}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-file-image-fill me-3"></i>
                        <i className="bi bi-camera-reels me-3"></i>
                        <i className="bi bi-clipboard-data-fill me-3"></i>
                        <i className="bi bi-emoji-frown me-3"></i>
                        <i className="bi bi-broadcast-pin me-3"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}
export default WhatsHappening;

