import { createStore, combineReducers } from "redux";
import stackCards from "../modules/stackCards";
import stackComments from "../modules/stackComments";

const rootReducer = combineReducers({
<<<<<<< HEAD
  stackCards,
  stackComments,
=======
    stackCards,
    stackComments,
>>>>>>> 879a20adf18d0dadeff5e56ab12dad767aabefc5
});
const store = createStore(rootReducer);

export default store;
