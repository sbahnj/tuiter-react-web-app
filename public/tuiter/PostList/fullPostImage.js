const FullPostImage = (fullpost) => {
    return(`
    <li>
      
      ${fullpost.topic}
      ${fullpost.userName}
      ${fullpost.time}
      ${fullpost.image}
      ${fullpost.title}
      
    
    </li>`


    );
}
export default FullPostImage;