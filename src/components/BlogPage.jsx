
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Card from 'react-bootstrap/Card'
import LoadingButton from "./Loadingbutton"
import ButtonExample from "./Spinnerloading";


function  BlogPage () {

   const [posts, setPosts] = useState ([]);
   const [loading, setLoading] = useState(true);

   const fetchPosts = async() => {
    const responsePosts = await axios.get(`https://jsonplaceholder.typicode.com/users`);
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
    {loading ? <div className="loading"><ButtonExample/></div>: <div className="blogs">
    <div className="blog-body">
    <div className="d-body">
    {
        posts.map((post, index) =>
        <div className="body-content" key={index}>
         <Card className="card-height" style={{ width: '750px'}} >
      <Card.Body>
        <Card.Title>{post.name}</Card.Title>
        <Card.Subtitle className="mb-2">{post.email}</Card.Subtitle>
        <div>
        Phone:  {post.phone}
        </div>
        <div>
        Website:  {post.website}
        </div>
        <Card.Text className="cardtext">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt cupiditate nihil perferendis obcaecati. Magni vel dicta praesentium asperiores ad optio nesciunt quasi. Facere animi ipsum fuga ipsam quidem nulla minima accusantium et, sunt error. Dignissimos alias tempora impedit similique porro?
        </Card.Text>
        <Card.Link href="#">Explore</Card.Link>
        
       <div className="textdiv">
       <textarea className="textarea" placeholder="comment" name="" id="" cols="30" rows="10"></textarea>
      <span className="lbutton"> <LoadingButton/></span>
       </div>
      </Card.Body>
    </Card>
        </div>
        
        )
    }
    </div>
    </div>
    <div>
      
      </div> 
    </div> } 
    
    </>
   )


}

export default BlogPage