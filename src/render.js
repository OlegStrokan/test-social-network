import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals'


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,document.getElementById('root'));
}
