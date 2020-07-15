import React, {Component} from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";

// export default function Photo(props){
// // const post = props.post;
// // const id = post.id;
// // let allComments = props.comments;
// // const num = allComments.forEach((comment)=>{
// //     let init = 0;
// //     if(comment.id === id){
// //         init++
// //     }
// //     return init
// // })
// // console.log(num);
//     return <figure className="figure"> 
//                      <Link to={`/single/${post.id}`}><img className="photo" src={props.post.imageLink} alt={props.post.description} /></Link>
//                           <figcaption> <p>{props.post.description}</p></figcaption>
//                           <div className="button-container">
//                              <button className="remove-button" onClick= {()=>{
//                                  props.removePost(props.index)
//                              }}>Remove</button>
//                              <Link className="button" to={`/single/${post.id}`}>
//                                  <div>

//                                  </div>
//                              </Link>
//                          </div>
//                 </figure>
// }


class Photo extends Component{


    componentDidMount(){
        this.props.startLoadingPosts();
    }
    render(){
        // console.log(this.props.posts)
        let post, id;
        if(this.props.location.pathname === "/"){
            post = this.props.post;
            id = post.id;
        }else{
            id = this.props.match.params.id;
            post = this.props.posts.find((post)=>{
                   return post.id == id;
             })
        }

      let commentArr = [];
      console.log(post,id)

        if(this.props.comments){
            this.props.comments.forEach(comment=>{
                if(comment.id == id){
                    commentArr.push(comment);
                }
            })
        }

        if(this.props.location.pathname === "/"){
            return <figure className="figure"> 
            <Link to={`/single/${post.id}`}><img className="photo" src={this.props.post.imageLink} alt={this.props.post.description} /></Link>
                 <figcaption> <p>{this.props.post.description}</p></figcaption>
                 <div className="button-container">
                    <button className="remove-button" onClick= {()=>{
                        this.props.startRemovePost(this.props.index,id)
                        console.log(this.props.index)
                    }}>Remove</button>
                    <Link className="button" to={`/single/${post.id}`}>
                        <div className="comment-count">
                            <div className="speech-bubble"></div>
                           {commentArr.length}
                        </div>
                    </Link>
                </div>
       </figure>
        }else if(this.props.location.pathname !== "/"){
            if(this.props.posts.length !== 0){
                return <figure className="figure"> 
                <Link to={`/single/${post.id}`}><img className="photo" src={this.props.post.imageLink} alt={this.props.post.description} /></Link>
                     <figcaption> <p>{this.props.post.description}</p></figcaption>
                     <div className="button-container">
                        <button className="remove-button" onClick= {()=>{
                            this.props.startRemovePost(this.props.index,id)
                            console.log(this.props.index)
                        }}>Remove</button>
                        <Link className="button" to={`/single/${post.id}`}>
                            <div className="comment-count">
                                <div className="speech-bubble"></div>
                               {commentArr.length}
                            </div>
                        </Link>
                    </div>
           </figure>
            }else if(this.props.posts.length === 0){
                return null;
            }

        }


    }
}


export default withRouter(Photo);



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
//         const post = this.this.props.post;
//         return <figure className="figure"> 
//                    <img className="photo" src={post.imageLink} alt={post.description} />
//                      <figcaption> <p>{post.description}</p></figcaption>
//                      <div className="button-container">
//                         <button className="remove-button">Remove</button>
//                      </div>
//                </figure>
//     }
// }