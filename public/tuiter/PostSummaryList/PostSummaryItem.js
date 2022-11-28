const PostSummaryItem = (post) => {





    return(`
    <ul style="list-style: none">
      
      <li>${post.topic}</li>
      <li>${post.userName} ${post.time}</li>
      <li>${post.title}  </li>
      <li><div class="wd-suggested-posts-image"> <img src=  ${post.image}  > </div></li>
      
     
    </ul>`







    );
}
export default PostSummaryItem;