import { FETCH_BUTTON_CLICKED } from "../actions/types";

export default function reducerAllPost(state=null, action){
    console.log("type select")
    switch (action.type){
        case FETCH_BUTTON_CLICKED:
            return action.payload;

        default: return state;
    }
}

