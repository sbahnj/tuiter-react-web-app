const PostSummaryItem = (post) => {

    let image_src = post.image



    return(`
    <ul>
      
      <li>${post.topic}</li>
      <li>${post.userName} ${post.time}</li>
      <li>${post.title}  </li>
      <li><div class="wd-suggested-posts-image"> <img src=  ${post.image}> </div></li>
      
      
      
      
      
    
    </ul>`







    );
}
export default PostSummaryItem;