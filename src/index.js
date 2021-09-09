import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";



let initialState = {
    movie:[],
    pages: 1,
    totalPages:0
}


const reducer = ( state = initialState, action)=>{
    switch (action.type){
        case "FETCH_MOVIES":
            return {...state,movie:[...action.payload.results]}
        case "GET_PAGES":
            console.log(action.payload)
            return {...state,pages: action.payload}
        case "TOTAL_PAGES":
            return {...state,totalPages: action.payload}
        default: return state
    }
}

let store = createStore(reducer)


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App  />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();