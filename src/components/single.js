import React, {Component} from "react";
import Photo from "./photo";
import Comments from "./comments"

export default class Single extends Component{
    render(){
        let {routeArg, posts} = this.props;
        const id = routeArg.match.params.id;

        // const posts = this.props.posts;
        let post = posts.find((post)=> post.id == id);
        return (
            <div className="single-photo">
                <Photo post={post}/>
                <Comments/>
            </div>
        )
    }
}