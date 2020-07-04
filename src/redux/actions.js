//remove
 
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


//adding a post
