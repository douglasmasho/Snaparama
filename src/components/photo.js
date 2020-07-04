import React from "react";
// import PropTypes from "prop-types"
// import {connect} from "react-redux";


export default function Photo(props){

    return <figure className="figure"> 
                     <img className="photo" src={props.post.imageLink} alt={props.post.description} />
                          <figcaption> <p>{props.post.description}</p></figcaption>
                          <div className="button-container">
                             <button className="remove-button" onClick= {()=>{
                                 props.removePost(props.index)
                             }}>Remove</button>
                         </div>
                </figure>
}

// function mapStateToProps(state){ ///mapping function //returns a state that you want to inject(inside an object literal)
//     return {
//         posts: state
//     }
// }


// export default connect(mapStateToProps)(Photo);





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