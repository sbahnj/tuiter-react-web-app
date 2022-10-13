import whos from "who";
import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoList = () => {
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

export default WhoList;