import PostSummaryItem from "./PostSummaryItem.js";

import posts from "./post.js";




const PostSummaryList = () => {
    return(`
      <ul>
         ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
      </ul>
   `);
}

export default PostSummaryList;

