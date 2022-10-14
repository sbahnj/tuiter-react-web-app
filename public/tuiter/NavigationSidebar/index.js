const NavigationSidebar = (active) => {

    let current_url = "HomeScreen"


    if ("HomeScreen" === current_url) {

        console.log("on Home Screen")

    }

    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a class="list-group-item" href="/">
       <i class="fab fa-home"></i>Home</a>
        
        <a class="list-group-item" href="/">
       <i class="fab fa-hashtag"></i>Explore</a>
        
        <a class="list-group-item" href="/">
       <i class="fab fa-bell"></i>Notifications</a>
            
            <a class="list-group-item" href="/">
       <i class="fab fa-envelope"></i>Messages</a>
       
       <a class="list-group-item" href="/">
       <i class="fab fa-bookmark"></i>Bookmarks</a>
       
       <a class="list-group-item" href="/">
       <i class="fab fa-list"></i>Lists</a>
       
       <a class="list-group-item" href="/">
       <i class="fab fa-user"></i>Profile</a>
       
       <a class="list-group-item" href="/">
       <i class="fab fa-circle"></i>More</a>
            
            
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

