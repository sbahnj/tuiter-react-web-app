

const FullPostItem = (fullpost) => {



    return(`
    <ul>
      
      ${fullpost.topic}
      ${fullpost.userName}
      ${fullpost.time}
      
      <li><img src=  ${fullpost.image} ></li>
      
      
      
      ${fullpost.title}
      
    
    </ul>, 
    
    <i class="fa-light fa-comment"></i>`



    );
}
export default FullPostItem;