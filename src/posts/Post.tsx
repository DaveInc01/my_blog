import React from "react";
import './Post.css'

function Post(props:any){
    console.log(props);
    return(
        <div className="post_main">
            <div className="img">
                <img src={props.data.img} alt="" />
            </div>
            <div className="title">
                <h3>{props.data.title}</h3>
            </div>
            <div className="description">
                <p>{props.data.description}</p>
            </div>
            <div className="author">
                <p>{props.data.name}</p>
            </div>
        </div>
    );
}

export default Post;