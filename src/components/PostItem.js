import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function PostItem(props){
    return(
        <Card style={{ width: '100%' }} className={"mb-5"}>
            <Card.Img height={"200px"} variant="top" src={require(`../images/${props.postImage}`)} />
            <Card.Body>
                <Card.Title>{props.postTitle}</Card.Title>
                <Card.Text>
                    {props.postText}
                </Card.Text>
                <Link to={`/post/${props.slug}`}>Devamını oku </Link>
            </Card.Body>
        </Card>
    )
}

export default PostItem;