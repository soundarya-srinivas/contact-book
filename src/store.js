import {applyMiddleware, createStore} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducers from "./Reducers/rootReducers";
import Thunk from "redux-thunk"



const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(Thunk)));
export default store