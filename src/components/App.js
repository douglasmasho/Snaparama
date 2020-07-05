

import Main from "../components/main"; 
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import  * as actions from "../redux/actions";
import {withRouter} from "react-router";

function mapStateToProps(state){ ///mapping function //returns a state that you want to inject(inside an object literal)
    return {
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)///binding the two so that calling the action rom props will dispatch the action
    //before binding---> this.props.dispacth(removePost());
    //after binding---->this.props.removePost()
                            //    |            |
                        //          |        |
                        //            |    |
                        //             | |
                        //              v
                    //         this part is the same as dispatch(removePost()) since they are binded 
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main); //this method returns a component which contains a connected component.


export default App;//exporting the new component, it is indeed the main component container(the container has no dom markup), only difference being that it's now connected.



//this is where we will inject the store state into the main component through props
//it will take in a store's state and map it into a prop of a component.......in this case, it will
//take the state of the store(posts) and map it to a new prop in the main component called posts

//the best thing to do is to connect the highest component in the tree to the store, and then pass that down as props.....
//unless you want a deeply nested component to use the store, in that case you can then connect the store directly to that deeply nested component.



///the first part of the function will return another function that takes in the component into which u want to inject the state
//first arg ===> the function that returns the state ///the mapping function
//second arg ===> the component into which you want to inject the state as props
//the connect method returns a new connected component


///you can then import this new component ( its still main, but it's now contained in App), which is connected.......then you can replace
//the old main component with the App component in main.js;


///the app component looks up the tree and looks for the store fo the provider that nests it.... that store's state will
//then be passed as an argument to the mapping function in the connect method
