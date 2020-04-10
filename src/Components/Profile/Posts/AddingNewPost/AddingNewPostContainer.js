import AddingNewPost from "./AddingNewPost";
import {addPost} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText
  }
};


const AddingNewPostContainer = connect(mapStateToProps, {addPost})(AddingNewPost);

export default AddingNewPostContainer;
