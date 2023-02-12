import { applyMiddleware , createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

 import {rootRedcuer} from '../reducer/index';

 const middleware = [thunk];

 export const store = createStore(
    rootRedcuer,
    composeWithDevTools(applyMiddleware(...middleware))
 )