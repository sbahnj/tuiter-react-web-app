

const FullPostItem = (fullpost) => {



    return(`
    <ul style="list-style: none">
      
      ${fullpost.topic}
      ${fullpost.userName}
      ${fullpost.time}
      
      <li> <div class="wd-home-image"> <img src=  ${fullpost.image}  width="90%">  </div></li>
      
      
      
      ${fullpost.title}
      
    
    </ul> 
    
    <div class="wd-icon-row">
    
    <i class="fa-regular fa-comment"></i>  <i class="fa-solid fa-retweet"></i> <i class="fa-regular fa-heart"></i> <i class="fa-solid fa-download"></i> </div>`






    );
}
export default FullPostItem;