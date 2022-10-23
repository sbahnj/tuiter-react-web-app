import React from "react";
import imageArray from './home-image.json';
import HomeImageItem from "./home-image-item";

const HomeImage = () => {
    return(
        <ul className="list-group">
            {
                imageArray.map(post =>
                    <HomeImageItem
                        key={post._id}
                        post={post}/> )
            }
        </ul>
    );
};
export default HomeImage;

/*By &lt;a href=&quot;//commons.wikimedia.org/w/
index.php?title=User:%D5%80%D5%A1%D5%B6%D5%B8%D6%82%D5%B4%D5%A1%D5%B6&amp;amp;action=edit&amp;amp;redlink=1&quot;
class=&quot;new&quot; title=&quot;User:Հանուման (page does not exist)&quot;&gt;Հանուման&lt;/a&gt; -
&lt;span class=&quot;int-own-work&quot; lang=&quot;en&quot;&gt;Own work&lt;/span&gt;,
<a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike
3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=32545264">Link</a>*/