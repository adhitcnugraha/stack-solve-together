import { createStore, combineReducers } from "redux";
import stackCards from "../modules/stackCards";
import stackComments from "../modules/stackComments";

const rootReducer = combineReducers({
  stackCards,
  stackComments,
  // stackEdit,     >>>>    Hilangin ini nanti kalo udah selesai
});
const store = createStore(rootReducer);

export default store;
