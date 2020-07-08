import React, {Component} from "react";
import Photo from "./photo";
import Comments from "./comments"

export default class Single extends Component{
   
    render(){
        const {routeArg, posts} = this.props;
        const id = routeArg.match.params.id;
        const comments = this.props.comments;
        let post = posts.find((post)=> post.id == id);
        return (
            <div className="single-photo">
                <Photo post={post}/>
                <Comments addComment = {this.props.addComment} comments={comments} id={id}/>
            </div>
        )
    }
}