import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, post: 'Hello, how are you?', counter: 12},
  {id: 2, post: 'My first post', counter: 30},
  {id: 3, post: 'My second post', counter: 22}
];
let dialogs = [
  {id: 1, name: 'Kolya'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Petya'},
  {id: 4, name: 'Vasya'},
  {id: 5, name: 'Sasha'},
  {id: 6, name: 'Olexa'}
];
let messages = [
  {id: 1, message: 'Hi there!'},
  {id: 2, message: 'Good day!'},
  {id: 3, message: 'Good bue!'},
  {id: 4, message: 'Hi there!'},
  {id: 5, message: 'Good day!'},
  {id: 6, message: 'Good bue!'}    
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
