import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import 'mapbox-gl/dist/mapbox-gl.css';
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
