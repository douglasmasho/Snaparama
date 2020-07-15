import post  from "../data/posts";
import {combineReducers} from "redux";

function comments(state= [], action){
    switch(action.type){
        case "ADD_COMMENT": return state.concat([action.commentObj]);
        case "LOAD_COMMENTS": return action.commentObj;
        default: return state
    }
    // return state;
    
}


function posts(state = post, action){
    switch(action.type){
        case "REMOVE_POST":
        return (state.filter((post,index)=> index !== action.index))
        case "ADD_POST":
        return (state.concat([action.post]))   
        case "LOAD_POSTS":
        return action.posts
        default: return state
    }
} 


const rootReducer = combineReducers({posts,comments})

//first arg--> current application state
//second arg-->action that modifies the state.



export default rootReducer;
