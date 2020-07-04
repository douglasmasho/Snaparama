import React, {Component} from "react"
import Title from "./title";
import PhotoWall from "./photowall";
import AddPhoto from "./addPhoto";
import {Route} from "react-router-dom";
import {removePost} from "../redux/actions";
import {Link} from "react-router-dom";


export default class Main extends Component{
  //  constructor(){
  //    super();
  //  }
    render(){
      //this.props.dispatch(removePost)
      return <div>
                <h1>
                  <Link to="/">Photowall</Link>
                </h1>
               <Route exact path="/" render={()=>(
                    <div>
                        <PhotoWall posts={this.props.posts} {...this.props}/>
                        {/* <PhotoWall/> */}
                     </div>
               )}/>
                <Route exact path="/AddPhoto" render ={({history})=>(
                  <AddPhoto {...this.props} onAddPhoto={(addedPost)=>{
                  }} history={history}/>
                  )}/>
             </div>
      

    }
  }


// function mapStateToProps(state){ ///mapping function //returns a state that you want to inject(inside an object literal)
//     return {
//         posts: state
//     }
// }

// export default connect(mapStateToProps)(Main);


// function simulateFetch(){
//   return [
//     { id: "0", 
//     description: "beautiful landscape",
//     imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
//     "3919321_1443393332_n.jpg"
//   }, 
//   {
//   id: "1",
//   description: "Aliens???",
//   imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
//   "08323785_735653395_n.jpg"
//   }, 
//   {
//   id: "2",
//   description: "On a vacation!",
//   imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
//   }   
//   ]
// }
// lifeCycle methods
//1st constructor method
// /the constructor should only be used to initiallize the state of our component, and bind methods to the proper context 
//the constructor and render methods are naturally called out when the application loads.
//the constructor sets the state of the component,
//then the render method renders ui depending on the component's state,
// then the componentDidMount method will be called when the component is rendered, this is a good method in which to handle asynchronous code.

//1st constructor method & componentWillMount methods
//2nd render method
//3rd componentDidMount method


  //  removePhoto(postRemoved){
  //    console.log(postRemoved.description);
  //    this.setState((state)=>({posts: state.posts.filter(post=> post !== postRemoved)})
  //    )
  //         //never mutate the original state property, rather create an updated copy
  //         //if u want ot delete from an array, instead of using splice, use array.prototype.filter();
  //         //if u want ot add to an arraay, instead of using push, use array.prototype.concat()
  //         //if u want to operate on a number, do not use augmented operations.
  //         //set state 
  //  }

  //  addPhoto(postSubmitted){
  //    this.setState(state=>({
  //      posts: state.posts.concat([postSubmitted])
  //    }))
  //  }