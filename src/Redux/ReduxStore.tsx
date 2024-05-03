import { createStore ,combineReducers} from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import chessGameReducer from "./Reducers/ChessGameReducer";

const CombineReducers=combineReducers({chessGameReducer})
const store=createStore(CombineReducers,{},applyMiddleware(thunk))

export default store