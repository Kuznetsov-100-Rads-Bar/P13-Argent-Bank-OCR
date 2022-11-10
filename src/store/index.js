import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { userDataMiddleware } from "./middlewares/UserData.middlewares";
import UserDataReducers from "./reducers/UserData.reducers";

const middlewares = applyMiddleware(
  userDataMiddleware
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  userData: UserDataReducers
});

export const store = createStore(reducers, composeEnhancers(middlewares))