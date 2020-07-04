import post  from "../data/posts";


const postReducer = function posts(state = post, action){
    switch(action.type){
        case "REMOVE_POST": 
        return (state.filter((post,index)=> index !== action.index))
        default: return state
    }
} 

//first arg--> current application state
//second arg-->action that modifies the state.



export default postReducer;
