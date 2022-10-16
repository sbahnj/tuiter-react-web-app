

const FullPostItem = (fullpost) => {



    return(`
    <ul>
      
      ${fullpost.topic}
      ${fullpost.userName}
      ${fullpost.time}
      
      <li> <div class="wd-suggested-posts-image"> <img src=  ${fullpost.image}  >  </div></li>
      
      
      
      ${fullpost.title}
      
    
    </ul> 
    
    <div class="wd-icon-row">
    
    <i class="fa-regular fa-comment"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-regular fa-heart"></i> <i class="fa-solid fa-download"></i> </div> `






    );
}
export default FullPostItem;