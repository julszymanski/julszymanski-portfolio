import React from 'react';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from "./components/reducers/bookreducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import {render} from 'react-dom';

const bookStore = createStore(reducer);

render (
  <Provider store = {bookStore}>
    <App/>
  </Provider>, document.getElementById('root')
)
