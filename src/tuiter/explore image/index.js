import React from "react";
import imageArray from './explore-image.json';
import ExploreImageItem from "./explore-image-item";

const FullExploreImage = () => {
    return(
        <ul className="list-group">
            {
                imageArray.map(post =>
                    <ExploreImageItem
                        key={post._id}
                        post={post}/> )
            }
        </ul>
    );
};
export default FullExploreImage;