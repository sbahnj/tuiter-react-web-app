import FullPostItem from "./FullPostItem.js";

import fullposts from "./fullPosts.js";




const FullPostList = () => {
    return(`
      <div class="list-group">
         ${
        fullposts.map(fullposts => {
            return(FullPostItem(fullposts));
        }).join('')
    }
      </div>
   `);
}

export default FullPostList;
