import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import ButtonExample from "./Spinnerloading";


function  Content () {

   const [posts, setPosts] = useState ([]);
   const [loading, setLoading] = useState(true);

   const fetchPosts = async() => {
    const responsePosts = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`);
    setPosts(responsePosts.data);
    setLoading(false);
    
    
    // fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then => setPosts ()

   }

   useEffect (() =>
   {
    fetchPosts();
   }, [])


   return (
    <>  
    <div className="json">
      <div><h1>ProjectContent</h1></div>
      <div><h5><span>from</span>JSONplaceholder</h5></div>
    </div>

    {loading ? <div className="loading"><ButtonExample/></div>: <div >
    {
        posts.map((post, index) =>
       <div className="projectcontent" >
         <div className="proj" key={index}>
          Title {post.id}. <span className="span">{post.title}</span>
          <div>
            {post.thumbnailUrl}
          </div>
          <hr />   
          <div>
            </div>      
        </div>
       <div className="proj">
       <div >
          {post.albumId}. <span className="span">{post.title}</span>
          </div> 
          <div>
            {post.url}
            </div> 
            <hr/>  
        </div>  
       </div>
        
        )
    }
    </div>  } 
    
    </>
   )


}

export default Content
