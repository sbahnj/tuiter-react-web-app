import WhoToFollowListItem from "./WhoToFollowListItem.js";

import whos from "./who.js";

/*const TodoList = () => {
    return(`
       <ul>
           <li>Buy milk</li>
           <li>Pickup the kids</li>
           <li>Walk the dog</li>
       </ul>
   `);
}
export default TodoList;*/




const WhoToFollowList = () => {
    return(`
      <ul>
         ${
        whos.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
      </ul>
   `);
}

export default WhoToFollowList;

