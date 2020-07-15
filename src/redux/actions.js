import {database} from "../database/config"

export function startAddingPost(post){
    return (dispatch)=>{           /////updating the posts node with an post id(key) with a value of the post
        return database.ref("posts").update({[post.id]: post}).then(()=>{ //after updating the db, we then dipatch the action that updates the store.
           dispatch(addPost(post))
        })
    }
}

export function startAddingComments(commentObj){
    return (dispatch)=>{
        return database.ref("comments").update({[Number(new Date())]: commentObj}).then(()=>{
            dispatch(addComment(commentObj))
        })
    }
}


export function startLoadingPosts(){
    return (dispatch)=>{
        return database.ref("posts").once("value").then((snapshot)=>{ ///the snaphot in this case contains all the child nodes of the posts node
            let posts = [];
            snapshot.forEach((childSnapShot)=>{
                posts.push(childSnapShot.val());///we are pushing each of the childsnapshot values into the array, so that we end up with the same array as before
            })
            dispatch(loadPosts(posts))
        })
    }
}

export function startLoadingComments(){
    return (dispatch)=>{
        return database.ref("comments").once("value").then((snapshot)=>{
            let commentsArr = [];
            snapshot.forEach((childSnapShot)=>{
                commentsArr.push(childSnapShot.val());
            })
            dispatch(loadComments(commentsArr))
        })

    }
}

export function startRemovePost(index, id){
    return (dispatch)=>{
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        })

    }
}

 
//action creator-->returns the action(which is an object)
export function removePost(index){
    return {
        type: "REMOVE_POST",
        index: index
    }
}

export function addPost(post){
    return {
        type: "ADD_POST",
        post: post
    }
}

export function addComment(commentObj){
    return {
        type: "ADD_COMMENT",
        commentObj: commentObj
    }
}

export function loadPosts(posts){
    return{
        type: "LOAD_POSTS",
        posts
    }
} 

export function loadComments(commentObj){
    return{
        type: "LOAD_COMMENTS",
        commentObj
    }
}


//adding a post
