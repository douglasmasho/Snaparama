import React, {Component} from "react";

//this is the new page

export default class AddPhoto extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const description = document.getElementById("description").value;
        const imageLink = document.getElementById("link").value;
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if(description && imageLink){
            this.props.onAddPhoto(post)  
            this.props.history.push("/")
        }
        
    }

    render(){
        return (
        <div>
            <h1>PhotoWall</h1>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link" id="link"/>
                    <input type="text" placeholder="Description" name="description" id="description"/>
                    <button>Post</button>
                </form>
            </div>
        </div>    

        )
    }
} 