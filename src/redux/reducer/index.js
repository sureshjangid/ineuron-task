import { combineReducers } from "redux";
import { get_user ,add_user,delete_user,single_user_data} from "./userReducer";

export const rootRedcuer = combineReducers({
    userData:get_user,
    add_user :add_user,
    single_user_data,single_user_data,
})