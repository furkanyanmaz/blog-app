import React from "react";
import data from "../data/post";
import PostItem from "../components/PostItem";

function Home(){
    return(
        <div>
            {
                data.posts.map(post => (
                    <PostItem key={post.id} postTitle={post.postTitle} postText={post.postText} postAuthor={post.postAuthor} postImage={post.postImage} slug={post.slug} category={post.category} />
                ))
            }
        </div>
    )
};

export default Home;