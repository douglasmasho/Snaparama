import React, {Component} from "react";

export default class Comments extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const id = this.props.id;
        const comment =document.getElementById("comment").value;
        let commentObj = {
            id: id,
            comment: comment
        }
        this.props.addComment(commentObj);
    }
    render(){
        const id = this.props.id;
        let allComments = this.props.comments;
        const commentArr = allComments.filter(comment=>comment.id === id);
        
        return(
            <div className="comment">
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" id="comment"/>
                    <input type="submit"/>
                </form>
                {
                    commentArr.map((commentObj, index)=>{
                        return(
                            <p key={index}>{commentObj.comment}</p>
                        )
                    })
                }
            </div>
        )
    }
}