import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="container">
  <form action="/" method="GET" class="form">
    <input type="search" placeholder="Search" class="search-field" />
    <button type="submit" class="search-button">
      <i class="fa fa-search"></i>
    </button>
  </form>
</div>


<div class="wd-gear">
  <i class="fa fa-cog fa-2x"></i>
</div>
           </div>
           
           
           
         
           <!------Nav Tabs--------------------------->
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      nav tabs
           </ul>
           <!-- image with overlaid text -->
           <div class="wd-container" >

                    <img src="spaceX.jpeg" style="width: 100%">
                    <div class="wd-bottom-left"> SpaceX's Starship </div>
                </div>
           
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
