const FullPostItem = (fullpost) => {
    return(`
    <ul>
      
      ${fullpost.topic}
      ${fullpost.userName}
      ${fullpost.time}
      
      <li><img src=  ${fullpost.image} ></li>
      
      
      
      ${fullpost.title}
      
    
    </ul>`


    );
}
export default FullPostItem;