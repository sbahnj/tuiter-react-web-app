

const FullPostItem = (fullpost) => {



    return(`
    <ul>
      
      ${fullpost.topic}
      ${fullpost.userName}
      ${fullpost.time}
      
      <li> <div class="wd-suggested-posts-image"> <img src=  ${fullpost.image}  >  </div></li>
      
      
      
      ${fullpost.title}
      
    
    </ul>, 
    
    <i class="fa-light fa-comment"></i>`



    );
}
export default FullPostItem;