import React from "react";
import Photo from "./photo";
import {Link} from "react-router-dom";
import Plus from "../plus.svg"
// import PropTypes from "prop-types"
//anchor tag, href attribute

export default function PhotoWall(props){

    return   <div>
                  <Link  to="/AddPhoto">
                      <div className="addBtn">
                        <img src={Plus} alt=""/>
                      </div>
                  </Link>
                <div className="photoGrid">
                  {props.posts.sort((a,b)=>{
                    return  b.id - a.id;
                    // return a - b;
                  }).map((post, index)=><Photo key={post.id} index={index} post={post} {...props}/>)}
                </div>
              </div>
}

// PhotoWall.propTypes = {
//     posts: PropTypes.array.isRequired,
//     onRemovePhoto: PropTypes.func.isRequired
// }

//in a steteless functional component, all the props of the instance can be accessed through the first argument of the functional component.


//if your components only has a render method, you can safely replace it with a functional component//////////////////////////////////////


 
