

const FullPostItem = (fullpost) => {



    return(`
    <ul style="list-style: none">
      
      ${fullpost.topic}
      <div class="wd-suggested-posts-heading">${fullpost.userName}</div>
      ${fullpost.time}
      
      <li> <div class="wd-home-image"> <img src=  ${fullpost.image}  width="90%">  </div></li>
      
      
      
      ${fullpost.title}
      
    
    </ul> 
    
    <div class="wd-icon-row">
    
    <i class="fa-regular fa-comment"></i> &emsp; &emsp; &emsp; &emsp; &emsp;<i class="fa-solid fa-retweet"></i> &emsp; &emsp; &emsp; &emsp; &emsp; <i class="fa-regular fa-heart"></i>&emsp; &emsp; &emsp; &emsp; &emsp; <i class="fa-solid fa-download"></i> </div>`






    );
}
export default FullPostItem;