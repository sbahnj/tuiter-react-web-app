import React from "react";
import postsArray from './post.json';
import FullPostItem from "./full-post-item";

const FullPostList = () => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <FullPostItem
                        key={post._id}
                        post={post}/> )
            }
        </ul>
    );
};
export default FullPostList;