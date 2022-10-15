const NavigationSidebar = (active) => {

    let current_url = window.location.href
    let explore_remote_url = "https://a5--legendary-brigadeiros-f56fd7.netlify.app/tuiter/explore/index.html"
    let explore_local_url = "http://localhost:63342/tuiter-react-web-app/public/tuiter/explore/index.html?_ijt=eb5f7ogoo80ovkqrc4o8d5ids5"

    let on_explore_screen = false


    if (current_url === current_url || current_url === current_url )   {

        console.log("on Explore Screen")
        on_explore_screen = true

    }

    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a class="list-group-item" href="../HomeScreen/index.html">
       <i class="fa-solid fa-house"></i>Home </a>
        
        <a class="list-group-item" href="../explore/index.html">
       <i class="fab fa-hashtag"></i>Explore</a>
        
        <a class="list-group-item" href="../notifications.html">
       <i class="fa-solid fa-bell"></i>Notifications</a>
            
            <a class="list-group-item" href="../messages.html">
       <i class="fa-solid fa-envelope"></i></i>Messages</a>
       
       <a class="list-group-item" href="../bookmarks/index.html">
       <i class="fa-solid fa-bookmark"></i>Bookmarks</a>
       
       <a class="list-group-item" href="../lists.html">
       <i class="fa-solid fa-list"></i>Lists</a>
       
       <a class="list-group-item" href="../profile.html">
       <i class="fa-solid fa-user"></i>Profile</a>
       
       <a class="list-group-item" href="../more.html">
       <i class="fa-solid fa-circle-dot"></i>More</a>
            
            
   </div>
   
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);

}
export default NavigationSidebar;

