import { createStore } from "redux";
import { combineReducers } from "redux";
import stackCards from "../modules/stackCards";

const rootReducer = combineReducers({
    stackCards,
});
const store = createStore(rootReducer);

export default store;