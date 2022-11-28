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
                      <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html" >For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
          
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>

        </ul>
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
