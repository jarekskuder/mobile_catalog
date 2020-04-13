import {combineReducers} from "redux";
import brandsReducer from "./brands";

const allReducers = combineReducers({
    brands: brandsReducer,
});
export default allReducers;
