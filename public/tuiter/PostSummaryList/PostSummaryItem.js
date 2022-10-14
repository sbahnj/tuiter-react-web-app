const PostSummaryItem = (post) => {
    return(`
    <li>
      
      ${post.topic}
      ${post.userName}
      ${post.time}
      ${post.image}
      ${post.title}
      
    </li>`
    );
}
export default PostSummaryItem;