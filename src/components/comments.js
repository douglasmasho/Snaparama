import React, {Component} from "react";

export default class Comments extends Component{
    render(){
        return(
            <div className="comment">
                <form className="comment-form">
                    <input type="text" placeholder="comment"/>
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}