const WhoToFollowListItem = (who) => {
    return(`


    <ul>
        <li><img src=  ${who.avatarIcon} style="width:50px;height:50px;" ></li>
        <li>${who.userName}</li>
        <li>@${who.handle}</li>
        
        
       
    </ul>
    <div class = "btn btn-primary btn-block rounded-pill"  style="float:right;"> Follow </div>`



    );
}
export default WhoToFollowListItem;