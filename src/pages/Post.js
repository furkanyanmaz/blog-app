import React, {useEffect, useState} from "react";
import data from "../data/post";
import {useParams} from "react-router-dom";
import {Card} from "react-bootstrap";


function Post(){
    let {slug} = useParams();
    const [post,setPost] = useState({
        id:"",
        postTitle:"",
        postText:"",
        postAuthor:"",
        postImage:"",
        slug:"",
        category:""
    });

    useEffect(() => {
        let selectData = data.posts.find(post => post.slug === slug);   
        setPost(selectData);
    },[post,slug])

    return(
        <Card style={{ width: '100%' }} className={"mb-5"}>
            <Card.Img height={"200px"} variant="top" src={require(`../images/${post.postImage}`)} />
            <Card.Body>
                <Card.Title>{post.postTitle}</Card.Title>
                <Card.Text>
                    {post.postText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Post;