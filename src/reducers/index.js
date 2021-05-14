import { combineReducers } from "redux";
import reducerAllPost from "./reducerAllPost";
import reducerSelectPost from "./reducerSelectPost";

const rootReducer = combineReducers({
    allPost:reducerAllPost,
    selectedPost:reducerSelectPost
})

export default rootReducer;