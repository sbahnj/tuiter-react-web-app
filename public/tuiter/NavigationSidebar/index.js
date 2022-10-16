let active = window.location.href
let explore_search = active.search("explore")
let home_search = active.search("HomeScreen")

console.log("Explore result:")
console.log(explore_search)
console.log("Home result:")
console.log(home_search)


const NavigationSidebar = (active) => {



        if (explore_search !== -1) {

            console.log("on Explore Screen")

            return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
           
           <div class="wd-home-nav"> 
       <a class="list-group-item" href="../HomeScreen/index.html">
       <i class="fa-solid fa-house" ></i>Home </a>
       </div>
        
        <a class="list-group-item" href="../explore/index.html">
       <i class="fab fa-hashtag" style="color: dodgerblue" ></i> <div class="wd-home-nav" style="color: dodgerblue">Explore</div> </a>
        
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

        else if (home_search !== -1) return (`
        
        
        <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
           
           <div class="wd-home-nav"> 
       <a class="list-group-item" href="../HomeScreen/index.html">
       <i class="fa-solid fa-house" style="color: dodgerblue"></i> <div class="wd-home-nav" style="color: dodgerblue"> Home </div> </a>
       </div>
        
        <a class="list-group-item" href="../explore/index.html">
       <i class="fab fa-hashtag"  ></i>Explore</a>
        
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

