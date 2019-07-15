import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App.js";
// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);






// import React from 'react';
// import ReactDOM from 'react-dom';
// import {render} from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './js/store/index';
// import './index.css';
// import App from './js/components/App.jsx';
// import index from "./index";
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// if(module.hot){
// 	module.hot.accept();
// }

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
