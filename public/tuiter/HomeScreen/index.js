import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";







function homeComponent() {
    $('#wd-home').append(`
       <h2>Home</h2>
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-warning">
    <h3>NavigationSidebar</h3>
     ${NavigationSidebar()}
   </div>
   <div class="col-10 col-lg-7 col-xl-6 bg-primary">
    <h3>PostListComponent</h3>
    post list
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger">
    <h3>PostSummaryList </h3>
    ${PostSummaryList()}
    
    
    
   </div>
  </div>
   `);
}
$(homeComponent);

