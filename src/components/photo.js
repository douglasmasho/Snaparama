import React from "react";
// import PropTypes from "prop-types"



export default function Photo(props){
    return <figure className="figure"> 
                     <img className="photo" src={props.post.imageLink} alt={props.post.description} />
                          <figcaption> <p>{props.post.description}</p></figcaption>
                          <div className="button-container">
                             <button className="remove-button" onClick= {()=>{
                                 props.onRemovePhoto(props.post);
                             }}>Remove</button>
                         </div>
                </figure>
}


// Photo.propTypes = {
//     posts: PropTypes.array.isRequired,
//     onRemovePhoto: PropTypes.func.isRequired
// }



// export default class Photo extends Component{
//     render(){
//         const post = this.props.post;
//         return <figure className="figure"> 
//                    <img className="photo" src={post.imageLink} alt={post.description} />
//                      <figcaption> <p>{post.description}</p></figcaption>
//                      <div className="button-container">
//                         <button className="remove-button">Remove</button>
//                      </div>
//                </figure>
//     }
// }