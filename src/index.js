import React from "react";
import ReactDom from "react-dom";
// import Main from "./components/main";
import "./styles/main.scss";
import {BrowserRouter} from "react-router-dom";
//create and init the redux store
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./redux/reducer";
import {Provider} from "react-redux";
import App from "./components/App";
import thunk from "redux-thunk";
// import {database} from "./database/config"


// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, applyMiddleware(thunk) );



ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById("root"));

//********************1st lesson intro*************************************/

// const tasks = ["take out the trash", "take out the trash", "walk the dog"];

//1st lesson
// const element = React.createElement("ol", null, 
// tasks.map((task, index) => React.createElement("li", {key: index}, task))
// );
//1st arg-->element type
//2nd arg --> keyProp: these are unique and are required by react to track changes in elements
   ///and when using an array to indicate children elements, each of them should have a keyProp.
//3rd arg --> Content//can also be an array of other elements


//********************2nd lesson JSX*************************************/
//remember that map returns an array.
// const element = <div>
//                     <h1>Tasks to complete</h1>
//                        <ol>{
//                            tasks.map((task, index)=> <li key ={index} >{task}</li>)
//                         }</ol>
//                 </div>;


//to put js within jsx, just use {};
//jsx starts as soon as you create an opening tag, and stops when you create a closing tag
//o as long as you are writing within jsx, and you want to enter js,always remember to escape it with the curly braces.
//the heyProp in jsx is defined in the opening tag of the jsx that is within an array

//********************3rd lesson Components***********************************/

//the component classes have gone to their own js filess within the src directory. 


//we can use the keyProp defined when using an instance of the class, within the class itself.
// we can access the keyProps of a class  with this.props.(whatever the name of the prop is.).
//when using an instance we can give the instance a keyProp.
//we can access the keyProp of that instance in the class(parent of that instance) using this(THIS point to the instance).


//********************4th lesson Refactor***********************************/


//in a steteless functional component, all the props of the instance can be accessed through the first argument of the functional component.


//if your components only has a render method, you can safely replace it with a functional component//////////////////////////////////////


     //initialize the state of the component.
     //make the array a state of the component instance
     //every time you update the state(array), react will rerender the page, updating the ui. 



//      const id = this.props.match.params.id;
//      const post = this.props.posts.find((post)=>{
//          return post.id == id;
//      })
//      console.log(post)

//      let commentArr = [];

//    if(this.props.comments){
//        this.props.comments.forEach(comment=>{
//            if(comment.id == id){
//                commentArr.push(comment);
//            }
//        })
//    }