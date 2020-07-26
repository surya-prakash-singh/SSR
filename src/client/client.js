import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./components/Routes";
import reducers from "./reducers"
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';
const store = createStore(reducers,{}, applyMiddleware(thunk));

ReactDOM.hydrate(<Provider store={store}><BrowserRouter><div>{renderRoutes(Routes)}</div></BrowserRouter></Provider>, document.querySelector("#root"));

console.log("Hey there");