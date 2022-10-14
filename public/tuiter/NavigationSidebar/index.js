const NavigationSidebar = (active) => {

    let current_url = window.location.href
    let explore_remote_url = "https://a5--legendary-brigadeiros-f56fd7.netlify.app/tuiter/explore/index.html"
    let explore_local_url = "http://localhost:63342/tuiter-react-web-app/public/tuiter/explore/index.html?_ijt=eb5f7ogoo80ovkqrc4o8d5ids5"


    if (current_url === explore_remote_url || current_url === explore_local_url )   {

        console.log("on Explore Screen")

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

