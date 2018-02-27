import React from 'react';
import ReactDOM from 'react-dom';
import Route from './react/routes';
import {Provider} from "react-redux";
import Store from './redux';
let store = Store();
ReactDOM.render(<Provider store={store}><Route/></Provider>, document.getElementById('root'));
