const PostSummaryItem = (post) => {

    let image_src = post.image

    console.log(image_src)

    return(`
    <ul>
      
      <li>${post.topic}</li>
      <li>${post.userName} ${post.time}</li>
      <li>${post.title}</li>
      
      
      <img src=  ${post.image} >
      
      
    
    </ul>`







    );
}
export default PostSummaryItem;