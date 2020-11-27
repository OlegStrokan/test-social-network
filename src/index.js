import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, message: 'Hi, how are you', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
]
const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
]
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'It is your first project?'},
    {id: 4, message: 'Maybe I will call you later...'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
