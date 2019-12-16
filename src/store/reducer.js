import { combineReducers } from "redux-immutable";
import HeadRudecer from '../head/reducer'
import HomeReducer from "../home/reducer";

const reducer = combineReducers({
  head: HeadRudecer,
  home: HomeReducer
});

export default reducer;
