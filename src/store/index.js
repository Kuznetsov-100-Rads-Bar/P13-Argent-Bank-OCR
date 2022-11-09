import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { userDataMiddleware } from "./middlewares/UserData.middlewares";
import UserDataReducers from "./reducers/UserData.reducers";

const middlewares = applyMiddleware(
  userDataMiddleware
);

const reducers = combineReducers({
  userData: UserDataReducers
});

export const store = createStore(reducers, middlewares /*&& window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/)